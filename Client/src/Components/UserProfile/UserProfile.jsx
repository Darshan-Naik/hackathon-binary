import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { ReactComponent as StarIcon } from "../../Icons/star.svg";
import "../../Styles/UserProfile/UserProfile.css";
import { url } from "../../Utils/serverUrl";
import BlogPost from "../BlogPost/BlogPost";
import ArticlePost from "../ArticlePost/ArticlePost";
import ChatBox from "../ChatBox/ChatBox";

function UserProfile({socket, handleCall }) {
  const [data, setData] = React.useState({});
  const [chatBoxVisibility, setChatBoxVisibility] = useState(false);
  const [blogBoxVisibility, setBlogBoxVisibility] = useState(false);
  const [articleBoxVisibility, setArticleBoxVisibility] = useState(false);

  const user = useSelector((state) => state.auth.user);
  const userId = user._id;
  const history = useHistory();
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
    connectStatus,
  } = data;
  const handleNewCall =()=>{
    if (type === "mentor") {
      axios
        .get(url + "/mentors/" + id)
        .then((response) => {
          handleCall(response.data.data.connect, user.name);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(url + "/students/" + id)
        .then((response) => {
           handleCall(response.data.data.connect, user.name);

        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  const { type, id } = useParams();

  React.useEffect(() => {
    if (type === "mentor") {
      axios
        .get(url + "/mentors/" + id)
        .then((response) => {
          setData(response.data.data);
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(url + "/students/" + id)
        .then((response) => {
          setData(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [type, id]);
  const handleChatBox =()=>{
   if (userId){
      setChatBoxVisibility(!chatBoxVisibility);
    } else {
      history.push("/login")
    }
  }

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
            <small>Location</small>

            <samp>{location || "Location"}</samp>
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

          {id !== userId ? (
            <div className="profile-button-main flex">
              <button className="profile-button flex" onClick={handleChatBox}>
                <img
                  src={process.env.PUBLIC_URL + "/Images/message_icon.png"}
                  alt="message_logo"
                />
                Send message
              </button>
              <button
                disabled={!connectStatus}
                className="profile-button flex"
                onClick={handleNewCall}
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
          ) : (
            <div className="profile-button-main flex">
              <button
                className="profile-button flex"
                onClick={() => setBlogBoxVisibility(!blogBoxVisibility)}
              >
                <img
                  src={process.env.PUBLIC_URL + "/Images/message_icon.png"}
                  alt="message_logo"
                />
                Write blog
              </button>
              <button
                className="profile-button flex"
                onClick={() => setArticleBoxVisibility(!articleBoxVisibility)}
              >
                <img
                  src={process.env.PUBLIC_URL + "/Images/message_icon.png"}
                  alt="message_logo"
                />
                Write article
              </button>
            </div>
          )}
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
      {chatBoxVisibility && (
        <ChatBox
          socket={socket}
          mentor={_id}
          student={userId}
          author={name}
          name={user.name}
          profilePic={profilePic}
          setChatBoxVisibility={setChatBoxVisibility}
        />
      )}
      {blogBoxVisibility && (
        <BlogPost setBlogBoxVisibility={setBlogBoxVisibility} />
      )}
      {articleBoxVisibility && (
        <ArticlePost setArticleBoxVisibility={setArticleBoxVisibility} />
      )}
    </section>
  );
}

export default UserProfile;
