import Nav from "./Nav";

const Header = () => (
  <div className="bar">
    <a href="">Sick fits</a>
    <Nav />
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </div>
);

export default Header;
