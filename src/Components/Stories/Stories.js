import { useState } from "react";
import "./Stories.css";
import StoriesData from "./StoriesData";
import Story from "./Story";

const Stories = () => {
  var prevIndex = 0;
  const storiesDataUpdated = StoriesData.map((data, idx) => {
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
  console.log("stories data updated", storiesDataUpdated);
  const [storiesList, setStoriesList] = useState(StoriesData);
  // const [prevInd, setPrevInd] = useState(0);
  console.log(storiesList);
  return (
    <div className="stories-container">
      {storiesList.map((story, idx) => (
        <Story storyData={story} index={idx} key={idx} />
      ))}
    </div>
  );
};

export default Stories;
