import PropTypes from "prop-types";
import React from "react";
import { formatPrice } from "../helpers";

export const shapeOfFish = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};
class Fish extends React.Component {
  static propTypes = {
    addToOrder: PropTypes.func,
    details: PropTypes.shape(shapeOfFish)
  };

  render() {
    const { image, name, price, status, desc } = this.props.details;
    const isAvailable = status === "available";

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(this.props.index)}
        >
          Add To Cart
        </button>
      </li>
    );
  }
}

export default Fish;
