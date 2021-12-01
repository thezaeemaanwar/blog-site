import "./NavBar.css";

const NavBar = ({ currentNav, setCurrentNav }) => {
  const navs = ["all", "home", "contact", "about", "stories", "blog"];

  const changeNav = (nav) => {
    setCurrentNav(nav);
  };

  return (
    <nav>
      <div className="nav-header">Categories</div>
      <ul className="nav-list">
        {navs.map((nav, idx) => {
          console.log(
            "nav: ",
            nav,
            " , current Nav: ",
            currentNav,
            "| ",
            currentNav === nav
          );
          return (
            <li
              key={idx}
              className={`nav-item ${currentNav === nav ? "selected" : ""}`}
              onClick={() => {
                changeNav(nav);
              }}
            >
              {nav}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
