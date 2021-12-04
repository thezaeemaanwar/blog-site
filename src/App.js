import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import AddStory from "./Components/Stories/AddStory";

import stories from "./Components/StoriesData";

const App = () => {
  var prevIndex = 0;
  const storiesDataUpdated = stories.map((data, idx) => {
    if (idx === prevIndex || idx === prevIndex + 1) {
      data.container = "horizontal";
      if (idx === prevIndex + 1) {
        prevIndex += 6;
      }
    } else {
      data.container = "vertical";
    }
    return data;
  });

  const routes = ["all", "travel", "food", "peopls", "style", "stories"];
  const [currentPage, setCurrentPage] = useState("all");
  const [allStories, setAllStories] = useState(storiesDataUpdated);

  const getCategoricalSories = () => {
    const temp = [...allStories];
    const filtered = temp.filter((story) => {
      if (story.category === currentPage) return story;
    });
    console.log(filtered);
  };
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
          <AddStory
            navs={routes}
            storiesList={allStories}
            setStoriesList={setAllStories}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
