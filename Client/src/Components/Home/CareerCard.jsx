import React from 'react'
import { useHistory } from 'react-router-dom';
import { ReactComponent as StarIcon } from "../../Icons/star.svg";
function CareerCard({ name, growth, popularity, icon }) {
    const history = useHistory();
  return (
    <div className="career-card flex" onClick={() => history.push("/search/"+name)}>
      <img src={icon} alt="logo" />
      <h2>{name}</h2>

      <div className="flex career-card-stars">
        {new Array(5).fill(growth).map((el, i) => (
          <div
            key={el + i}
            className={popularity > i ? "activeStar" : "inactiveStar"}
          >
            <StarIcon />
          </div>
        ))}
      </div>
      <span>Popularity</span>
      <div className="progress">
        <svg
          className="progress-circle"
          width="100px"
          height="100px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="progress-circle-back"
            cx="40"
            cy="40"
            r="35"
          ></circle>
          <circle
            style={{
              strokeDasharray: `${(growth * (4.64 * 47)) / 100}, 999`,
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
            cx="40"
            cy="40"
            r="35"
          ></circle>
        </svg>
        <div className="progress-text">{growth}%</div>
      </div>
      <small>Growth</small>
    </div>
  );
}

export default CareerCard
