import "./Header.css";
import { NavLink } from "react-router-dom";

const HeaderItem = ({ itemText }) => {
  return (
    <NavLink
      to={itemText}
      className={(isActive) =>
        "header-item" + (isActive.isActive ? " selected" : "")
      }
    >
      {itemText}
    </NavLink>
  );
};

export default HeaderItem;
