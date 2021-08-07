import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import "../../Styles/UserProfile/UserProfile.css";
import { ReactComponent as StarIcon } from "../../Icons/star.svg";
import { useSelector } from "react-redux";

function UserProfile({ handleCall }) {
  const [data, setData] = React.useState({});

  const user = useSelector((state) => state.auth.user);
  const userId = user._id;
  const {
    profilePic,
    company,
    location,
    specialization,
    name,
    jobTitle,
    rating,
    phone,
    birthday,
    email,
    address,
    gender,
    _id,
    connect,
  } = data;

  const { type, id } = useParams();

  React.useEffect(() => {
    if (type === "mentor") {
      axios
        .get("http://localhost:8000/mentors/" + id)
        .then((response) => {
          setData(response.data.data);
          console.log(response.data.data.rating);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get("http://localhost:8000/students/" + id)
        .then((response) => {
          setData(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [type, id]);
  return (
    <section className="profile-container-main">
      <div className="profile-container flex">
        <div className="profile-left-box flex">
          <img
            src={
              profilePic ||
              process.env.PUBLIC_URL + "/Images/userProfile_icon.png"
            }
            alt="profilePic"
          />
          <div className="profile-work flex">
            <small>Work</small>
            <h2>{company || "Company Name"}</h2>
            <p>{location || "Location"}</p>
          </div>
          <div className="profile-work flex">
            <small>Skills</small>
            {specialization &&
              specialization.map((el) => (
                <samp key={el}>{el.toUpperCase() || "React"}</samp>
              ))}
          </div>
        </div>
        <div className="profile-right-box flex">
          <div className="profile-heading flex">
            <div className="profile-title flex">
              <h2>{name || "userName"}</h2>
              <p>{jobTitle || "Designation"}</p>
            </div>

            {id === userId && (
              <button className="edit-button flex">
                <img
                  src={process.env.PUBLIC_URL + "/Images/edite_icon.png"}
                  alt="edit_logo"
                />
                Edit detail
              </button>
            )}
          </div>

          <div className="ranking flex">
            <small>RATING</small>
            <div className="profile-stars flex">
              {new Array(5).fill(0).map((el, i) => (
                <p
                  key={el + i}
                  className={rating > i ? "activeStar" : "inactiveStar"}
                >
                  <StarIcon />
                </p>
              ))}
            </div>
          </div>

          <div className="profile-button-main flex">
            <button className="profile-button flex">
              <img
                src={process.env.PUBLIC_URL + "/Images/message_icon.png"}
                alt="message_logo"
              />
              Send message
            </button>
            <button
              className="profile-button flex"
              onClick={() => handleCall(connect, name)}
            >
              <img
                src={process.env.PUBLIC_URL + "/Images/video_icon.png"}
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
            <samp>+91-{phone || "xxx-xxx-xxx"}</samp>
          </div>
          <div className="contact flex">
            <p>Address:</p>
            <samp>{address || "xxx-xxx-xxx"}</samp>
          </div>
          <div className="contact flex">
            <p>Email:</p>
            <samp>{email || "xxx-xxx-xxx"}</samp>
          </div>

          <small>BASIC INFORMATION</small>
          <div className="contact flex">
            <p>Birthday:</p>
            <samp>{birthday}</samp>
          </div>
          <div className="contact flex">
            <p>Gender:</p>
            <samp>{gender || "Male"}</samp>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
