import React from "react";
import "./Card.scss";
import { AiFillStar } from "react-icons/ai";
import { SiCodechef } from "react-icons/si";
function Card() {
  return (
    <>
      <div className="card">
        <div className="header">
          <SiCodechef size={30} />
        </div>
        <div className="header">
          <h5>Alice</h5>
          <div className="rating">
            {" "}
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
          </div>
        </div>
        <div className="description">
          <p>You're doing great work, keep going... </p>
        </div>
      </div>
    </>
  );
}

export default Card;
