import React from 'react'

function NewsCard({
  title,
  body,
  category,
  imageUrl,
  createdAt,
  likes,
  comments,
  type,
  authorId
}) {
    
  return (
    <div className="news-container flex">
      {imageUrl && <img src={imageUrl} className="news-image" alt="news" />}
      <div className="news-box">
        <h1>{title}</h1>
        <p>{body}</p>
        <p>
          {likes && (
            <small>
              {" "}
              <span>Likes : </span>
              {likes.length}
            </small>
          )}{" "}
          {comments && (
            <small>
              <span>Comments : </span>
              {comments.length}
            </small>
          )}
        </p>
        <p>
          <span>Time :</span> <small> {createdAt}</small>
        </p>
        <p>
          <span> category :</span> <small> {category}</small>
        </p>
        {authorId && (
          <p>
            <span> Author : </span> <small>{authorId.name}</small>
          </p>
        )}
      </div>
    </div>  
  );
}

export default NewsCard
