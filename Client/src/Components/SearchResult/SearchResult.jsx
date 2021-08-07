import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import NewsCard from "./NewsCard";
import "../../Styles/SearchResult/SearchResult.css";
import { ReactComponent as StarIcon } from "../../Icons/star.svg";

function SearchResult() {
  const [blogs, setBlogs] = React.useState([]);
  const [news, setNews] = React.useState([]);
  const [article, setArticle] = React.useState([]);
  const [currentCategory, setCurrentCategory] = React.useState({});
  const { name, growth, popularity, icon } = currentCategory;

  const { query } = useParams();
  React.useEffect(() => {
    axios
      .get("http://localhost:8000/search?q=" + query)
      .then((response) => {
        setBlogs(response.data.blogs);
        setNews(response.data.news);
        setArticle(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
      axios
        .get("http://localhost:8000/category?q=" + query)
        .then((response) => {
          setCurrentCategory(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, [query]);

  return (
    <section className="flex result-container">
      <section className="category-result-card-container">
        <div className="category-card flex">
          <img src={icon} alt="logo" />
          <h2>{name}</h2>
          <div className="flex career-card-stars">
            {new Array(5).fill(0).map((el, i) => (
              <div
                key={el + i}
                className={popularity > i ? "activeStar" : "inactiveStar"}
              >
                <StarIcon />
              </div>
            ))}
          </div>

          <div className="progress">
            <svg
              className="progress-circle"
              width="200px"
              height="200px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="progress-circle-back"
                cx="80"
                cy="80"
                r="45"
              ></circle>
              <circle
                style={{
                  strokeDasharray: `${(growth * (4.64 * 60)) / 100}, 999`,
                  stroke: `${
                    growth <= 25
                      ? "red"
                      : growth <= 50
                      ? "blue"
                      : growth <= 75
                      ? "green"
                      : "yellowGreen"
                  }`,
                }}
                className="progress-circle-prog"
                cx="80"
                cy="80"
                r="45"
              ></circle>
            </svg>
            <div className="progress-text">
              <p>Growth</p>
              {growth}%
            </div>
          </div>
        </div>
      </section>
      <section className="search-result-container">
        {/* {!blogs.length && !news.length && !article.length ? (
          <h1>No Result for "{query}" </h1>
        ) : (
          <h1>Search Result for "{query}"</h1>
        )} */}
        {news.map((item) => (
          <NewsCard key={item._id} {...item} type="news" />
        ))}
        {article.map((item) => (
          <NewsCard key={item._id} {...item} type="article" />
        ))}
        {blogs.map((item) => (
          <NewsCard key={item._id} {...item} type="blogs" />
        ))}
      </section>
    </section>
  );
}

export default SearchResult;
