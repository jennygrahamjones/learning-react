import React from 'react';
import { Link } from 'gatsby';

function SinglePizza({ pizza }) {
  return (
    <>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2>
          <span className="mark">{pizza.name}</span>
        </h2>
        <p>{pizza.toppings.map((topping) => topping.name).join(', ')}</p>
      </Link>
    </>
  );
}
export default function PizzaList({ pizzas }) {
  return (
    <div>
      {pizzas.map((pizza) => (
        <SinglePizza pizza={pizza} key={pizza.id} />
      ))}
    </div>
  );
}
