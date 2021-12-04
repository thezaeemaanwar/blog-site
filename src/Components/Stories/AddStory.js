import { useState, useRef, useEffect } from "react";
import "./AddStory.css";

const AddStory = ({ navs, storiesList, setStoriesList }) => {
  // const options = ["travel", "food", "people", "style"];

  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");

  const categoryRef = useRef(0);
  const [validated, setValidated] = useState(false);
  const [validations, setValidations] = useState({
    title: true,
    desc: true,
    country: true,
  });

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
    setValidations({ title: true, desc: true, country: true });
  };

  useEffect(() => {
    const temp = validations;
    if (title !== "" && /^[a-zA-Z\s]*$/.test(title)) temp.title = true;
    else temp.title = false;
    if (country !== "" && /^[a-zA-Z\s]*$/.test(country)) temp.country = true;
    else temp.country = false;
    if (description !== "" && description !== null) temp.desc = true;
    else temp.desc = false;

    setValidations(temp);
    if (temp.title && temp.desc && temp.country) setValidated(true);
    else setValidated(false);
  });

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
          {validations.title ? null : (
            <p className="error-tip">Invalid Title !</p>
          )}
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
          {validations.country ? null : (
            <p className="error-tip">Invalid Country !</p>
          )}
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
          {validations.desc ? null : (
            <p className="error-tip">Description can't be empty!</p>
          )}
        </div>
        <input
          type="submit"
          className={`submit-button ${validated ? "enabled" : ""}`}
          disabled={validated ? "" : "disabled"}
        />
      </form>
    </div>
  );
};

export default AddStory;
