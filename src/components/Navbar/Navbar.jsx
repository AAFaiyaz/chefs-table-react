import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="logo ">Recipe Calories</div>
      <div className="menu">
        <a href="">Home</a>
        <a href="">Recipes</a>
        <a href="">About</a>
        <a href="">Search</a>
      </div>
      <div className="navRightSide">
        <div className="search"></div>
        <div className="user"></div>
      </div>
    </div>
  );
};

export default Navbar;
