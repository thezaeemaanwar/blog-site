import { useState } from "react";
import "./Stories.css";
import StoriesData from "./StoriesData";
import Story from "./Story";

const Stories = () => {
  const [storiesList, setStoriesList] = useState(StoriesData);
  console.log(storiesList);
  return (
    <div className="stories-container">
      {storiesList.map((story, idx) => (
        <Story storyData={story} key={idx} />
      ))}
    </div>
  );
};

export default Stories;
