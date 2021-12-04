import "./Stories.css";
// import "../../Assets/image01.jpg";
// import image from "./image1.jpg";

const Story = ({ storyData, setShowMore, setStoryData }) => {
  const showMoreClick = () => {
    setShowMore(true);
    setStoryData(storyData);
  };
  return (
    <div className={"story-wrapper " + storyData.container}>
      <img
        src={storyData.image.default}
        alt={storyData.title}
        className="story-image"
      />
      <div className="story-details">
        <div className="time-wrapper">
          <div className="story-reactions">{storyData.emojis}</div>
          <p className="story-time">{storyData.time}</p>
        </div>
        <h2 className="story-title">{storyData.title}</h2>
        <p className="story-country">{storyData.country}</p>
        <p className="story-content">{storyData.content}</p>
        <p
          className="show-more-btn"
          onClick={() => {
            showMoreClick();
          }}
        >
          Show More.
        </p>
      </div>
    </div>
  );
};

export default Story;
