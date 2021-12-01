import "./Header.css";
import HeaderItem from "./HeaderItem";

const Header = ({ currentNav, setCurrentNav }) => {
  const headerItems = ["all", "home", "contact", "about", "stories", "blog"];

  return (
    <header className="header">
      {headerItems.map((item, idx) => (
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
