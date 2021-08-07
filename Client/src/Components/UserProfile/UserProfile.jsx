import React from "react";
import "../../Styles/UserProfile/UserProfile.css";
function UserProfile() {
  return (
    <div className="profile-container flex">
      <div className="profile-left-box flex">
        <img
          src={process.env.PUBLIC_URL + "/Images/userProfile_icon.png"}
          alt="profilePic"
        />
        <div className="profile-work flex">
          <small>Work</small>
          <h2>Company Name</h2>
          <p>Location</p>
        </div>
        <div className="profile-work flex">
          <small>Skills</small>
          <samp>React</samp>
          <samp>React</samp>
          <samp>React</samp>
          <samp>React</samp>
        </div>
      </div>
      <div className="profile-right-box flex">
        <h2>Jon Snow</h2>
        <p>Full Stack Developer</p>
        <div className="ranking">
          <small>RANKING</small>
        </div>

        <div className="profile-button-main flex">
          <button className="profile-button flex">Send message</button>
          <button className="profile-button flex">Make Meeting</button>
        </div>
        <div className="line"></div>
        <small>CONTACT INFORMATION</small>
        <small>BASIC INFORMATION</small>
      </div>
    </div>
  );
}

export default UserProfile;
