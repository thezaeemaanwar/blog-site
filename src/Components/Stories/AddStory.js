import { useRef } from "react";

const AddStory = ({ navs, storiesList, setStoriesList }) => {
  const options = navs.splice(1);
  console.log(options);
  const descRef = useRef(0);
  const titleRef = useRef(0);
  const categoryRef = useRef(0);
  const countryRef = useRef(0);

  const addStory = (event) => {
    event.preventDefault();
    const obj = {
      image: require("../../Assets/image3.jpg"),
      emojis: "⚡ 🔥",
      time: "4 hours ago",
      title: titleRef.current.value,
      country: countryRef.current.value,
      category: categoryRef.current.value,
      content: descRef.current.value,
    };
    const temp = [...storiesList];
    temp.append(obj);
    setStoriesList(temp);
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          AddStory(e);
        }}
        className="add-story-form"
      >
        <label className="input-label" for="story-title">
          Title:
        </label>
        <input
          className="input-box"
          type="text"
          ref={titleRef}
          name="story-title"
          placeholder="Enter Story Title Here."
        />
        <label className="input-label" for="country-name">
          Country:
        </label>
        <input
          className="input-box"
          type="text"
          ref={countryRef}
          name="country-name"
          placeholder="Enter Country Name Here."
        />
        <label className="input-label" for="story-desc">
          Category:
        </label>
        <select className="category-dropdown">
          {options.map((op, idx) => (
            <option key={idx} className="category-option" value="op">
              {op}
            </option>
          ))}
        </select>
        <label className="input-label" for="story-desc">
          Description:
        </label>
        <textarea
          className="input-box"
          ref={titleRef}
          name="story-desc"
          placeholder="Enter Story Description Here."
        ></textarea>
      </form>
    </div>
  );
};

export default AddStory;
