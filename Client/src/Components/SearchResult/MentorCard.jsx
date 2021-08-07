import React from 'react'

function MentorCard({ name, email, photo, specialization }) {
  return (
    <div className="mentor-card">
      <img src={photo} alt="Profile" />
      <h1>{name}</h1>
      <p>
        <span>Email : </span>
        {email}
      </p>
      <p>
        <span>Specialization : </span> {specialization.join(", ")}
      </p>
    </div>
  );
}

export default MentorCard
