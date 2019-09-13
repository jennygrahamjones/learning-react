import React from "react";

class StorePicker extends React.Component {
  render() {
    // return React.createElement("p", { classname: "hey" }, "heyyyy"); <-- non-JSX syntax for mixing HTML with JS... yuck?
    return (
      <>
        {/* An empty tag is equivalent to using <React.Fragment> and allows returning sibling elements within render() */}
        <form action="" className="store-selector">
          {/* className instead of class! */}
          <h2>Please enter a store</h2>
          <input type="text" required placeholder="Store name" />
          <button type="submit">Visit store</button>
        </form>
      </>
    );
  }
}

export default StorePicker;
