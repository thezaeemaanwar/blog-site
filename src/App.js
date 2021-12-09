import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import AddStory from "./Components/Stories/AddStory";
import Stories from "./Components/Stories/Stories";

import stories from "./Components/StoriesData";

const App = () => {
  const routes = [
    { text: "travel", id: 1 },
    { text: "food", id: 2 },
    { text: "people", id: 3 },
    { text: "style", id: 4 },
    { text: "stories", id: 5 },
  ];
  const [allStories, setAllStories] = useState(stories);

  return (
    <div className="App">
      <h1 className="h1">Blog</h1>
      <div className="main-container">
        <Header />
        <div className="bottom-container">
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={<Stories storiesList={allStories} />}
            />
            {routes.map((route) => (
              <Route
                key={route.id}
                path={route.text}
                element={
                  <Stories
                    storiesList={allStories.filter(
                      (story) => story.category === route.text
                    )}
                    r={route.text}
                  />
                }
              />
            ))}
            <Route
              path="AddStory"
              element={
                <AddStory
                  navs={routes}
                  storiesList={allStories}
                  setStoriesList={setAllStories}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
