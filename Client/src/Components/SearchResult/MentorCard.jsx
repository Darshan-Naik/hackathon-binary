import React from 'react'
import { useHistory } from 'react-router-dom';

function MentorCard({ name, email, profilePic, specialization ,_id}) {
  const history = useHistory() 
  return (
    <div
      className="mentor-card flex"
      onClick={() => history.push("/profile/mentor/" + _id)}
    >
      <img
        src={
          profilePic || process.env.PUBLIC_URL + "/Images/userProfile_icon.png"
        }
        alt="Profile"
      />
      <div>
        <h1>{name}</h1>
        <p>
          {/* <span>Email : </span> */}
          {email}
        </p>
        <p>
          <span>Specialization : </span>{" "}
          {specialization.map((item) => item.toUpperCase()).join(", ")}
        </p>
      </div>
    </div>
  );
}

export default MentorCard
