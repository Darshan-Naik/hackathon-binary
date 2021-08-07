import React from 'react'
import { useHistory } from 'react-router-dom';

function MentorCard({ name, email, photo, specialization ,_id}) {
  const history = useHistory() 
  return (
    <div className="mentor-card flex" onClick={()=>history.push("/user-profile/"+_id) }>
      <img
        src={photo || process.env.PUBLIC_URL + "/Images/userProfile_icon.png"}
        alt="Profile"
      />
      <div>
        <h1>{name}</h1>
        <p>
          {/* <span>Email : </span> */}
          {email}
        </p>
        <p>
          <span>Specialization : </span> {specialization.map(item=>item.toUpperCase()).join(", ")}
        </p>
      </div>
    </div>
  );
}

export default MentorCard
