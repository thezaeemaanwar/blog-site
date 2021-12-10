import "App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import NotFound from "Components/404/404";
import Header from "Components/Header/Header";
import NavBar from "Components/NavBar/NavBar";
import AddStory from "Components/Stories/AddStory";
import Stories from "Components/Stories/Stories";

import stories from "Data/StoriesData";

const App = () => {
  const routes = [
    { text: "all", id: 0 },
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
            <Route path="*" element={<NotFound />} />
            {routes.map((route) => (
              <Route
                key={route.id}
                path={route.text}
                element={
                  <Stories
                    storiesList={
                      route.text === "all"
                        ? allStories
                        : allStories.filter(
                            (story) => story.category === route.text
                          )
                    }
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
            <Route
              exact
              path="/"
              element={<Stories storiesList={allStories} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
