import React from "react";
import "../../Styles/UserProfile/UserProfile.css";
function UserProfile() {
  return (
    <section className="profile-container-main">
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
          <div className="profile-heading flex">
            <div className="profile-title flex">
              <h2>Jon Snow</h2>
              <p>Full Stack Developer</p>
            </div>

            <button className="edit-button flex">
              <img
                src={process.env.PUBLIC_URL + "/Images/edite_icon.png"}
                alt="edit_logo"
              />
              Edit detail
            </button>
          </div>

          <div className="ranking flex">
            <small>RATING</small>
            <p>*****</p>
          </div>

          <div className="profile-button-main flex">
            <button className="profile-button flex">
              <img
                src={process.env.PUBLIC_URL + "/Images/message_icon.png"}
                alt="message_logo"
              />
              Send message
            </button>
            <button className="profile-button flex">
              <img
                src={process.env.PUBLIC_URL + "/Images/calender_icon.png"}
                alt="meeting_logo"
              />
              Make meeting
            </button>
            <button className="profile-button flex">
              <img
                src={process.env.PUBLIC_URL + "/Images/report_icon.png"}
                alt="report_logo"
              />
              Report user
            </button>
          </div>
          <div className="line"></div>
          <small>CONTACT INFORMATION</small>
          <div className="contact flex">
            <p>Phone:</p>
            <samp>+91-1234567890</samp>
          </div>
          <div className="contact flex">
            <p>Address:</p>
            <samp>adsdlkms lskfdlsk lskjflks skjflsk kjsflk</samp>
          </div>
          <div className="contact flex">
            <p>Email:</p>
            <samp>jon@gmail.com</samp>
          </div>

          <small>BASIC INFORMATION</small>
          <div className="contact flex">
            <p>Birthday:</p>
            <samp>July 16, 1998 </samp>
          </div>
          <div className="contact flex">
            <p>Gender:</p>
            <samp>Male</samp>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
