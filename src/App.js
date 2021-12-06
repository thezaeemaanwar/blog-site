import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import AddStory from "./Components/Stories/AddStory";
import Stories from "./Components/Stories/Stories";

import stories from "./Components/StoriesData";

const App = () => {
  const routes = ["all", "travel", "food", "people", "style", "stories"];
  const [currentPage, setCurrentPage] = useState("all");
  const [allStories, setAllStories] = useState(stories);
  const [filteredStories, setFilteredStories] = useState(stories);

  useEffect(() => {
    if (currentPage === "all") {
      setFilteredStories(allStories);
      return;
    }
    const filtered = allStories.filter(
      (story) => story.category === currentPage
    );
    setFilteredStories(filtered);
  }, [currentPage, allStories]);

  return (
    <div className="App">
      <h1 className="h1">Blog</h1>
      <div className="main-container">
        <Header
          navs={routes}
          currentNav={currentPage}
          setCurrentNav={setCurrentPage}
        />
        <div className="bottom-container">
          <NavBar
            navs={routes}
            currentNav={currentPage}
            setCurrentNav={setCurrentPage}
          />
          {currentPage === "addStory" ? (
            <AddStory
              navs={routes}
              storiesList={allStories}
              setStoriesList={setAllStories}
            />
          ) : (
            <Stories storiesList={filteredStories} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
