import path from 'path';

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

export async function createPages(params) {
  // create pages dynamically
  // wait for all promises to be resolved before finishing this function
  await Promise.all([
    turnPizzasIntoPagaes(params),
    turnToppingsIntoPages(params),
  ]);
}
