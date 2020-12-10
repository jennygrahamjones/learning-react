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

export async function createPages(params) {
  // create pages dynamically
  // 1. pizzas
  await turnPizzasIntoPagaes(params);
  // 2. toppings
  // 3. slicemasters
}
