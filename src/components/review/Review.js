import React from "react";
import "./Review.scss";
import Card from "../../pages/card/Card";

function Review() {
  return (
    <>
      <div className="review">
        {" "}
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Review;
