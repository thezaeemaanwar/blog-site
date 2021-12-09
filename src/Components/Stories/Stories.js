import { useEffect, useState } from "react";
import stories from "../StoriesData";
import "./Stories.css";
import Story from "./Story";

const Stories = ({ storiesList }) => {
  var prevIndex = 0;

  const [stories, setStories] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [storyData, setStoryData] = useState({});

  useEffect(() => {
    const storiesDataUpdated = storiesList.map((data, idx) => {
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
    setStories(storiesDataUpdated);
  }, [storiesList]);

  return (
    <div className="stories-container">
      {storiesList.length === 0 ? (
        <div className="no-stories-area">
          No Stories Added for this category !
        </div>
      ) : (
        stories.map((story, idx) => (
          <Story
            storyData={story}
            setShowMore={setShowMore}
            setStoryData={setStoryData}
            key={idx}
          />
        ))
      )}
      {showMore && (
        <div className="more-modal">
          <div className="modal-content">
            <div
              className="cross-btn"
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              &#10006;
            </div>
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
            </div>
            <div
              className="cross show-more-btn"
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              Show Less
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Stories.defaultProps = {
  storiesList: [],
};

export default Stories;
