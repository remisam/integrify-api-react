import { Link } from "react-router-dom";

import "../style/components/DetailsButton.css";

const DetailsButton = ({ id }) => {
  return (
    <div className="details-btn-container">
      <Link to={`/users/${id}`}>
        <button className="details-btn">MORE DETAILS</button>
      </Link>
    </div>
  );
};

export default DetailsButton;
