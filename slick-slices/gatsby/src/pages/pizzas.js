import React from 'react';
import { graphql } from 'gatsby';
import PizzaList from '../components/PizzaList';
import ToppingsFilter from '../components/ToppingsFilter';

export default function PizzasPage({ data }) {
  const pizzas = data.pizzas.nodes;
  return (
    <>
      <ToppingsFilter />
      <PizzaList pizzas={pizzas} />
    </>
  );
}

export const query = graphql`
  query {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        price
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            # this could be something like fixed(width: 200, height: 200) with GatsbySanityImageFixed
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
