import React from "react";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    // make sure fish are loaded before rendering
    if (!fish) return null;

    const count = this.props.order[key];
    const isAvailable = fish.status === "available";

    const transitionOptions = {
      classNames: "order",
      key,
      timeout: { enter: 250, exit: 250 }
    };

    return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>
          <span>
            {isAvailable ? (
              <>
                <TransitionGroup component="span" className="count">
                  <CSSTransition
                    classNames="count"
                    key={count}
                    timeout={{ enter: 250, exit: 250 }}
                  >
                    <span>{count}</span>
                  </CSSTransition>
                </TransitionGroup>
                lbs {fish.name}
                {formatPrice(count * fish.price)}
                <button onClick={() => this.props.removeFromOrder(key)}>
                  &times;
                </button>
              </>
            ) : (
              <>Sorry {fish ? fish.name : "fish"} is no longer unavailable</>
            )}
          </span>
        </li>
      </CSSTransition>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      return isAvailable ? prevTotal + count * fish.price : prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
