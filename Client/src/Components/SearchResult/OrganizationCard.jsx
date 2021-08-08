import React from 'react'
import { useHistory } from 'react-router-dom';

function OrganizationCard({_id, imageUrl, name, description, likes}) {
  const history = useHistory() 
  return (
    <div
      className="mentor-card flex"
    >
      <img
        src={
            imageUrl || process.env.PUBLIC_URL + "/Images/userProfile_icon.png"
        }
        alt="Profile"
      />
      <div>
        <h1>{name}</h1>
        <p>
          {/* <span>Email : </span> */}
          {likes}
        </p>
        <p>
          <span>Description : </span>{" "}
          {description.substring(0,65)} <span style={{color: 'blue'}}>...read more</span>
        </p>
      </div>
    </div>
  );
}

export default OrganizationCard