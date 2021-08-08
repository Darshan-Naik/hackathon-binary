import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import "../../Styles/BlogPost/BlogPost.css";

function BlogPost() {
  const [blog, setBlog] = React.useState("");
  const user = useSelector((state) => state.auth.user);

  const { profilePic, name, _id } = user;

  const payload = { author: _id, blog };

  const handleSubmit = () => {
    const requestParam = {
      method: "post",
      url: "http://localhost:8000/blog/",
      header: {
        "Content-Type": "application/json",
      },
      payload,
    };
    axios(requestParam)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="blog-post-main-container flex">
      <div className="blog-post-box flex">
        <div>
          <img
            src={
              profilePic ||
              process.env.PUBLIC_URL + "/Images/userProfile_icon.png"
            }
            alt="profile_pic"
          />
          <p>{name || "userName"}</p>
        </div>
        <textarea
          name="blog"
          value={blog}
          onChange={(e) => setBlog(e.target.value)}
          cols="30"
          rows="10"
        ></textarea>
        <div>
          <button onClick={handleSubmit}>Post</button>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
