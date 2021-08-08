import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as StarIcon } from "../../Icons/star.svg";
import "../../Styles/SearchResult/SearchResult.css";
import { url } from '../../Utils/serverUrl';
import MentorCard from "./MentorCard";
import NewsCard from "./NewsCard";
import OrganizationCard from './OrganizationCard';

function SearchResult() {
  const [blogs, setBlogs] = React.useState([]);
  const [news, setNews] = React.useState([]);
  const [article, setArticle] = React.useState([]);
  const [mentors, setMentors] = React.useState([]);
  const [organization, setOrganization] = React.useState([]);
  const [currentCategory, setCurrentCategory] = React.useState({});
  const {
    name,
    growth,
    popularity,
    icon,
    description,
    preference,
    beginnerSalary,
    careerTimespan,
    courseDuration,
    experienceSalary,
  } = currentCategory;

  const { query } = useParams();
  React.useEffect(() => {
    axios
      .get(url + "/search?q=" + query)
      .then((response) => {
        setBlogs(response.data.blogs);
        setNews(response.data.news);
        setArticle(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(url + "/category?q=" + query)
      .then((response) => {
        setCurrentCategory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(url + "/mentors?q=" + query)
      .then((response) => {
        
        setMentors(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
      axios
      .get(url + "/organizations?q=" + query.toLowerCase())
      .then((response) => {
        //console.log(response.data.data)
        setOrganization(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);

  return (
    <section className="flex result-container">
      <section className="category-result-card-container ">
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
          <q>{description}</q>
          <div className="progress">
            <svg
              className="progress-circle"
              width="200px"
              height="200px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="progress-circle-back"
                cx="100"
                cy="100"
                r="50"
              ></circle>
              <circle
                style={{
                  strokeDasharray: `${(growth * (4.64 * 85)) / 100}, 999`,
                  stroke: `${growth <= 25
                      ? "red"
                      : growth <= 50
                        ? "blue"
                        : growth <= 75
                          ? "green"
                          : "yellowGreen"
                    }`,
                }}
                className="progress-circle-prog"
                cx="100"
                cy="100"
                r="65"
              ></circle>
            </svg>
            <div className="progress-text">
              <p>Growth</p>
              {growth}%
            </div>
          </div>

          <strong>
            Earnings :{" "}
            <span>
              {beginnerSalary} - {experienceSalary} L
            </span>
          </strong>
          <strong>
            Learning Duration : <span>{courseDuration} Years</span>{" "}
          </strong>
          <strong>
            Preference : <span>{preference} %</span>{" "}
          </strong>
          <strong>
            Career Time-span : <span>{careerTimespan} Years</span>{" "}
          </strong>
        </div>
      </section>
      <section className="search-result-container scroll">
        <h1>"{query}"</h1>

        {news.map((item) => (
          <NewsCard key={item._id} {...item} type="News" />
        ))}
        {article.map((item) => (
          <NewsCard key={item._id} {...item} type="Article" />
        ))}
        {blogs.map((item) => (
          <NewsCard key={item._id} {...item} type="Blogs" />
        ))}
      </section>
      <section className="mentors-container scroll">
        <h1>"Mentors"</h1>
        {mentors.map((mentor) => (
          <MentorCard key={mentor._id} {...mentor} />
        ))}
        <h1>"Organization"</h1>
        {organization.map((el)=>(
          <OrganizationCard key={el._id} {...el} />
        ))}
      </section>
    </section>
  );
}

export default SearchResult;
