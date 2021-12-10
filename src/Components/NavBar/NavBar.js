import "Components/NavBar/NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navs = [
    { text: "all", id: 0 },
    { text: "travel", id: 1 },
    { text: "food", id: 2 },
    { text: "people", id: 3 },
    { text: "style", id: 4 },
    { text: "stories", id: 5 },
  ];
  return (
    <nav>
      <div className="nav-header">Categories</div>
      <div className="nav-list">
        {navs.map((nav) => (
          <NavLink
            key={nav.id}
            className={(isActive) =>
              "nav-item" + (!isActive.isActive ? "" : " selected")
            }
            to={nav.text}
          >
            {nav.text}
          </NavLink>
        ))}
      </div>
      <NavLink
        to="AddStory"
        className={(active) =>
          "add-story-btn" + (active.isActive ? " clicked" : "")
        }
      >
        Add Story
      </NavLink>
    </nav>
  );
};

export default NavBar;
