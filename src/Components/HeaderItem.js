import "./Header.css";

const HeaderItem = ({ itemText, nav, setNav }) => {
  const changeNav = () => {
    setNav(itemText);
  };
  return (
    <div
      className={`header-item ${nav === itemText ? "selected" : ""}`}
      onClick={changeNav}
    >
      {itemText}
    </div>
  );
};

export default HeaderItem;
