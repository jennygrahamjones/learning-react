import React from "react";

/* Header only has a render function, so there's no need for it to be a class component. 
   Instead, it can be a stateless functional component! Props are passed in with an arrow 
   function where they can be deconstructed, e.g. tagline instead of props.tagline */

const Header = ({ tagline }) => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">of</span>
        <span className="the">the</span>
      </span>
      day!
    </h1>
    <h3 className="tagline">
      <span>{tagline}</span>
    </h3>
  </header>
);

export default Header;
