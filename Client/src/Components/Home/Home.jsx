import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../Icons/search.svg";
import { getCategory } from "../../Redux/App/action";
import "../../Styles/Home/Home.css";
import { url } from '../../Utils/serverUrl';
import CareerCard from "./CareerCard";

const tips = ["IT", "Programming", "Medical", "Science", "Law"];

function Home() {
  const dispatch = useDispatch();
  const category = useSelector(state => state.app.category);

  const history = useHistory()
  const [search, setSearch] = React.useState("");
  React.useEffect(() => {
    axios
      .get(url + "/category")
      .then((response) => {
        dispatch(getCategory(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = () => {
    history.push(`/search/${search}`);
  }

  return (
    <section className="home-container">
      <div
        className="banner-box flex"
        style={{
          backgroundImage: `url("${process.env.PUBLIC_URL + "/Images/banner.png"
            }")`,
        }}
      >
        <div className="flex">
          <img
            src={process.env.PUBLIC_URL + "/Images/banner.png"}
            alt="banner"
          />
        </div>
      </div>
      <div className="main-search-container flex">
        <div className="main-search-box">
          <p>Search for career</p>
          <div className="main-search flex">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search"
              list="category"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <datalist id="category">
              {category.map((item) => (
                <option key={item._id + item.name} value={item.name} />
              ))}
            </datalist>
            <button className="search-btn" onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className="search-tips flex">
            <p>Trending Searches : </p>
            {tips.map((tip, i) => (
              <p key={i}>{tip}.</p>
            ))}
          </div>
        </div>
      </div>
      <div className="career-cards-container flex ">
        <h2>Featured</h2>
        <div className="career-cards-box flex">
          {category.map((item) => (
            <CareerCard key={item._id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
