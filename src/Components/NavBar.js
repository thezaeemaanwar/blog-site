import "./NavBar.css";

const NavBar = ({ navs, currentNav, setCurrentNav }) => {

  const changeNav = (nav) => {
    setCurrentNav(nav);
  };

  return (
    <nav>
      <div className="nav-header">Categories</div>
      <ul className="nav-list">
        {navs.map((nav, idx) => (
          <li
            key={idx}
            className={`nav-item ${currentNav === nav ? "selected" : ""}`}
            onClick={() => {
              changeNav(nav);
            }}
          >
            {nav}
          </li>
        ))}
      </ul>
      <div
        className="add-story-btn"
        onClick={() => {
          changeNav("addStory");
        }}
      >
        Add Story
      </div>
    </nav>
  );
};

export default NavBar;
