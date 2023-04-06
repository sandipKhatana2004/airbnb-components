import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <Link to="/details" state={{}}>
        <img
          src={`images/${props.item.coverImage}`}
          className="card--image"
          alt="host"
        />
      </Link>
      <div className="card--stats">
        <img src="images/star.svg" className="card--star" alt="star" />
        <span>{props.item.states.rating}</span>
        <span className="gray">({props.item.states.reviewCount}) : </span>
        <span className="gray"> {props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
};

export default Card;
