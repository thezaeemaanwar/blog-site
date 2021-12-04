import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Stories from "./Components/Stories/Stories";
import Blog from "./Components/Blog";
import Home from "./Components/Home";
import All from "./Components/All";

const App = () => {
  // const allPages = ["all", "home", "contact", "about", "stories", "blog"];
  const [currentPage, setCurrentPage] = useState("stories");
  return (
    <div className="App">
      <h1 className="h1">Blog</h1>
      <div className="main-container">
        <Header currentNav={currentPage} setCurrentNav={setCurrentPage} />
        <div className="bottom-container">
          <NavBar currentNav={currentPage} setCurrentNav={setCurrentPage} />
          {currentPage === "stories" ? (
            <Stories />
          ) : currentPage === "blog" ? (
            <Blog />
          ) : currentPage === "all" ? (
            <All />
          ) : currentPage === "home" ? (
            <Home />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default App;
