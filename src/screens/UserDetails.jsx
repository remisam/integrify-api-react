import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import * as Icon from "react-feather";
import axios from "axios";

import "../style/screens/UserDetails.css";

const UserDetails = ({ name }) => {
  const [userDetails, setUserDetails] = useState();
  let params = useParams();
  console.log("params", params.id);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => setUserDetails(res.data));
  }, []);

  return (
    userDetails && (
      <div className="user-details-container">
        <div className="user-details-content">
          <div className="user-details-img">
            <Icon.User color="#4990fb" size={45} />
          </div>
          <h1>{userDetails.name}</h1>
          <p>- Username: @{userDetails.username}</p>
          <p>- Email: {userDetails.email}</p>
          <p>- Phone: {userDetails.phone}</p>
          <p>- Company: {userDetails.company.name}</p>
          <p>
            - Website:{" "}
            <a href={`http://${userDetails.website}`}>
              http://{userDetails.website}
            </a>
          </p>
          <p>- Address:</p>
          <li>Avenue {userDetails.address.street}</li>
          <li>{userDetails.address.suite}</li>
          <li>{userDetails.address.city}</li>
          <li>{userDetails.address.zipcode}</li>
        </div>
        <Link to="/">
          <button className="user-details-btn">BACK</button>
        </Link>
      </div>
    )
  );
};

export default UserDetails;
