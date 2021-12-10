import "Components/Header/Header.css";
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

HeaderItem.defaultProps = {
  itemText: "all",
};

export default HeaderItem;
