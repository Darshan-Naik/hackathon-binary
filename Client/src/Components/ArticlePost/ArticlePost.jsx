import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import "../../Styles/BlogPost/BlogPost.css";
import { url } from "../../Utils/serverUrl";
import { ReactComponent as CloseIcon } from "../../Icons/close.svg";

const initState = {
  authorId: "",
  title: "",
  category: "",
  body: "",
};
function ArticlePost({ setArticleBoxVisibility }) {
  const [blog, setBlog] = React.useState(initState);
  const user = useSelector((state) => state.auth.user);
  const { profilePic, name, _id } = user;
  const { authorId = _id, title, category, body } = blog;

  const handleChange = (e) => {
    const { name, value } = e.target;
    let payload = {
      ...blog,
      [name]: value,
    };
    setBlog(payload);
  };

  const handleSubmit = () => {
    const requestParam = {
      method: "post",
      url: url + "/articles",
      header: {
        "Content-Type": "application/json",
      },
      blog,
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
        <div className="blog-post-header flex">
          <img
            src={
              profilePic ||
              process.env.PUBLIC_URL + "/Images/userProfile_icon.png"
            }
            alt="profile_pic"
          />
          <p>{name.toUpperCase() || "userName"}</p>
          <CloseIcon onClick={() => setArticleBoxVisibility(false)} />
        </div>
        <input
          className="blog-post-form-box"
          type="text"
          name="title"
          value={title}
          placeholder="Title"
          onChange={handleChange}
        />
        <input
          className="blog-post-form-box"
          type="text"
          name="category"
          value={category}
          placeholder="Category"
          onChange={handleChange}
        />
        <textarea
          name="body"
          value={body}
          placeholder="Write article..."
          onChange={handleChange}
        ></textarea>

        <button className="blog-post-btn" onClick={handleSubmit}>
          Post Article
        </button>
      </div>
    </div>
  );
}

export default ArticlePost;
