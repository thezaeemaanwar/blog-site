import "Components/Header/Header.css";
import HeaderItem from "Components/Header/HeaderItem";

const Header = () => {
  const navs = [
    { text: "all", id: 0 },
    { text: "travel", id: 1 },
    { text: "food", id: 2 },
    { text: "people", id: 3 },
    { text: "style", id: 4 },
    { text: "stories", id: 5 },
  ];
  return (
    <header className="header">
      {navs.map((item) => (
        <HeaderItem key={item.id} itemText={item.text} />
      ))}
    </header>
  );
};

export default Header;
