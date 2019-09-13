import React from "react";

import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  /* Without the arrow syntax here, it would be necessary to declare a constructor
     and explicitly bind each function, otherwise 'this' would be undefined */
  goToStore = event => {
    event.preventDefault();
    // Get the text from the input
    const storeName = this.myInput.current.value;
    // Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    // return React.createElement("p", { classname: "hey" }, "heyyyy"); <-- non-JSX syntax for mixing HTML with JS... yuck?
    return (
      <>
        {/* An empty tag is equivalent to using <React.Fragment> and allows returning sibling elements within render() */}
        <form className="store-selector" onSubmit={this.goToStore}>
          {/* className instead of class! */}
          <h2>Please enter a store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="enter store name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit store</button>
        </form>
      </>
    );
  }
}

export default StorePicker;
