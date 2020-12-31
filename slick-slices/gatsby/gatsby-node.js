import path from 'path';
import fetch from 'isomorphic-fetch';

async function turnPizzasIntoPagaes({ graphql, actions }) {
  // 1. get template for the page
  const pizzaTemplate = path.resolve('./src/templates/Pizza.js');
  // 2. query all pizzas
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. loop over to create a page for each pizza
  data.pizzas.nodes.forEach((pizza) => {
    actions.createPage({
      path: `pizza/${pizza.slug.current}`,
      component: pizzaTemplate,
      context: {
        slug: pizza.slug.current,
      },
    });
  });
}

async function turnToppingsIntoPages({ graphql, actions }) {
  // 1. get template
  const toppingsTemplate = path.resolve('./src/pages/pizzas.js');
  // 2. query toppings
  const { data } = await graphql(`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
        }
      }
    }
  `);
  // 3. create toppings page
  data.toppings.nodes.forEach((topping) => {
    const toppingPath = `topping/${topping.name
      .toLowerCase()
      .split(' ')
      .join('-')}`;
    actions.createPage({
      path: toppingPath,
      component: toppingsTemplate,
      context: {
        topping: topping.name,
      },
    });
  });
  // 4. pass topping data to pizza.js
}

// pulls the data from the external API into the GraphQL api,
// automatically generating allBeers and beer queries :o
async function fetchBeersAndTurnIntoNodes({
  actions,
  createNodeId,
  createContentDigest,
}) {
  // 1. fetch list of beers
  const res = await fetch('https://sampleapis.com/beers/api/ale');
  const beers = await res.json();
  // 2. loop over each one
  for (const beer of beers) {
    // create a node
    const nodeMeta = {
      id: createNodeId(`beer-${beer.name}`),
      parent: null,
      children: [],
      internal: {
        type: 'Beer',
        mediaType: 'application/json', // allows other plugins to find this media
        contentDigest: createContentDigest(beer),
      },
    };
    // 3. create node for beer
    actions.createNode({ ...beer, ...nodeMeta });
  }
}

// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#sourceNodes
export async function sourceNodes(params) {
  // fetch a list of beers and source them into our gatsby API!
  await Promise.all([fetchBeersAndTurnIntoNodes(params)]);
}

// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPages
export async function createPages(params) {
  // create pages dynamically
  // wait for all promises to be resolved before finishing this function
  await Promise.all([
    turnPizzasIntoPagaes(params),
    turnToppingsIntoPages(params),
  ]);
}
