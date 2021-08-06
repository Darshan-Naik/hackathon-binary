import React from "react";
import "../../Styles/Home/Home.css";
import { ReactComponent as SearchIcon } from "../../Icons/search.svg";

const tips = ["IT", "Programming", "Medical", "Science", "Law"];

function Home() {
  return (
    <section className="home-container">
      <div className="banner-box flex">
        <img
          src="https://codecanyon.img.customer.envatousercontent.com/files/342540447/Preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=87695d92d7b188c684bbecf84e7ce000"
          alt="banner"
        />
      </div>
      <div className="main-search-container flex">
        <div className="main-search-box">
          <p>Search for career</p>
          <div className="main-search flex">
            <SearchIcon/>
            <input type="text" placeholder="Search" />
            <button className="search-btn">Search</button>
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
          <div className="career-card"></div>
          <div className="career-card"></div>
          <div className="career-card"></div>
          <div className="career-card"></div>
          <div className="career-card"></div>
          <div className="career-card"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
