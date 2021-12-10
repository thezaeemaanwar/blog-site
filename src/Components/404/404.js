import { Link } from "react-router-dom";
import "Components/404/404.css";

const NotFound = () => {
  return (
    <div className="not-found-component">
      {" "}
      <h1>PAGE NOT FOUND.</h1>
      <p>
        Click <Link to="/">here</Link> to Navigate to HomePage
      </p>
    </div>
  );
};

export default NotFound;
