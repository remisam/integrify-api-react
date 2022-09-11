import DetailsButton from "./DetailsButton";

import "../style/components/UserCard.css";

const UserCard = ({ name, username, website, id }) => {
  return (
    <div className="user-card-container">
      <div className="user-img">
        <p>{name[0].toUpperCase()}</p>
      </div>
      <h1>{name}</h1>
      <h3>@{username}</h3>
      <a href={`http://${website}`}>http://{website}</a>
      <DetailsButton id={id} />
    </div>
  );
};

export default UserCard;
