import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";

import "../style/components/UserList.css";

const UserList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log(res.data) || setCards(res.data));
  }, []);

  return (
    <div className="card-list-container">
      {cards.map((card) => (
        <div className="user-container">
          <UserCard
            id={card.id}
            name={card.name}
            username={card.username}
            website={card.website}
          />
        </div>
      ))}
    </div>
  );
};

export default UserList;
