import "./Stories.css";
import Story from "./Story";

const Stories = ({ storiesList }) => {
  return (
    <div className="stories-container">
      {storiesList.map((story, idx) => (
        <Story storyData={story} index={idx} key={idx} />
      ))}
    </div>
  );
};

export default Stories;
