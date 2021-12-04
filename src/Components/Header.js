import "./Header.css";
import HeaderItem from "./HeaderItem";

const Header = ({ navs, currentNav, setCurrentNav }) => {
  return (
    <header className="header">
      {navs.map((item, idx) => (
        <HeaderItem
          key={idx}
          itemText={item}
          nav={currentNav}
          setNav={setCurrentNav}
        />
      ))}
    </header>
  );
};

export default Header;
