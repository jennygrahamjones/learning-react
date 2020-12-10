import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const ToppingsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    padding: 5px;
    background: var(--grey);
    border-radius: 2px;
    align-items: center;
    .count {
      background: white;
      padding: 2px 5px;
    }
    .active {
      background: var(--yellow);
    }
  }
`;

// uses a static query! you do this when you are querying data outside of a page, e.g. inside of a component. these queries don't take variables

function countPizzasWithToppings(pizzas) {
  // return the pizzas with counts

  const counts = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      // check if this is an existing topping
      // if yes, increment
      // otherwise create new entry in acc and set to 1
      const existingTopping = acc[topping.id];
      if (existingTopping) {
        existingTopping.count += 1;
      } else {
        acc[topping.id] = {
          id: topping.id,
          name: topping.name,
          count: 1,
        };
      }
      return acc;
    }, {});

  // sort based on count
  const sortedToppings = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  return sortedToppings;
}

function ToppingsFilter() {
  // get a list of all the toppings
  // get a list of all the pizzas with their toppings
  const { pizzas } = useStaticQuery(graphql`
    query {
      pizzas: allSanityPizza {
        nodes {
          toppings {
            name
            id
          }
        }
      }
    }
  `);

  // count how many pizzas have each topping
  const toppingsWithCounts = countPizzasWithToppings(pizzas.nodes);

  // loop over list of toppings and display the topping and the count of pizzas with that topping

  return (
    <ToppingsStyles>
      {toppingsWithCounts.map((topping) => (
        <Link
          to={`/topping/${topping.name.toLowerCase().replaceAll(' ', '-')}`}
          key={topping.id}
        >
          <span className="name">{topping.name}</span>
          <span className="count">{topping.count}</span>
        </Link>
      ))}
    </ToppingsStyles>
  );
}

export default ToppingsFilter;
