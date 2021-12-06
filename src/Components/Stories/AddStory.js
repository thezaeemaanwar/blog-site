import { useState, useRef, useEffect } from "react";
import "./AddStory.css";

const AddStory = ({ navs, storiesList, setStoriesList }) => {
  // const options = ["travel", "food", "people", "style"];

  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");

  const [titleError, setTitleError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const categoryRef = useRef(0);

  const addStory = (event) => {
    event.preventDefault();
    const obj = {
      image: require("../../Assets/image3.jpg"),
      emojis: "⚡ 🔥",
      time: "4 hours ago",
      title: title,
      country: country,
      category: categoryRef.current.value,
      content: description,
    };
    const temp = [...storiesList];
    temp.push(obj);
    setStoriesList(temp);

    alert("Story Added Successfully!");

    setTitle("");
    setDescription("");
    setCountry("");
  };

  useEffect(() => {
    if (/^[a-zA-Z\s]*$/.test(title)) setTitleError(false);
    else setTitleError(true);
  }, [title, setTitleError]);

  useEffect(() => {
    if (/^[a-zA-Z\s]*$/.test(country)) setCountryError(false);
    else setCountryError(true);
  }, [country, setCountryError]);

  useEffect(() => {
    if (description !== null) setDescriptionError(false);
    else setDescriptionError(true);
  }, [description, setDescriptionError]);

  return (
    <div className="form-wrapper">
      <form
        onSubmit={(e) => {
          addStory(e);
        }}
        className="add-story-form"
      >
        <label className="input-label" htmlFor="story-title">
          Title:
        </label>
        <div>
          <input
            className="input-box"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            name="story-title"
            placeholder="Enter Story Title Here."
          />
          {titleError ? <p className="error-tip">Invalid Title !</p> : null}
        </div>
        <label className="input-label" htmlFor="country-name">
          Country:
        </label>
        <div>
          <input
            className="input-box"
            type="text"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            name="country-name"
            placeholder="Enter Country Name Here."
          />
          {countryError ? <p className="error-tip">Invalid Country !</p> : null}
        </div>
        <label className="input-label" htmlFor="story-desc">
          Category:
        </label>
        <select className="category-dropdown" ref={categoryRef}>
          {navs.slice(1).map((op, idx) => (
            <option key={idx} className="category-option" value={op}>
              {op}
            </option>
          ))}
        </select>
        <label className="input-label" htmlFor="story-desc">
          Description:
        </label>
        <div>
          <textarea
            className="input-box"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            name="story-desc"
            placeholder="Enter Story Description Here."
          ></textarea>
          {descriptionError ? (
            <p className="error-tip">Description can't be empty!</p>
          ) : null}
        </div>
        <input
          type="submit"
          className={`submit-button ${
            titleError ||
            descriptionError ||
            countryError ||
            title === "" ||
            country === "" ||
            description === ""
              ? ""
              : "enabled"
          }`}
          disabled={
            titleError ||
            descriptionError ||
            countryError ||
            title === "" ||
            country === "" ||
            description === ""
              ? "disabled"
              : ""
          }
        />
      </form>
    </div>
  );
};

export default AddStory;
