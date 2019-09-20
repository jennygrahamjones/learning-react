import PropTypes from "prop-types";
import React from "react";

/* Header only has a render function, so there's no need for it to be a class component. 
   Instead, it can be a stateless functional component! Props are passed in with an arrow 
   function where they can be deconstructed, e.g. tagline instead of props.tagline */

const Header = props => (
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
      <span>{props.tagline}</span>
    </h3>
  </header>
);

// propTypes can be used to validate components
Header.propTypes = { tagline: PropTypes.string.isRequired };

export default Header;
