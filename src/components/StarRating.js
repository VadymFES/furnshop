import React from "react";

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const halfStars = rating - filledStars >= 0.5 ? 1 : 0;
  const emptyStars = 5 - filledStars - halfStars;

  return (
    <div className="star-rating">
      {[...Array(filledStars)].map((_, index) => (
        <i key={index} className="fa fa-star"></i>
      ))}
      {halfStars > 0 && <i className="fa fa-star-half-o"></i>}
      {[...Array(emptyStars)].map((_, index) => (
        <i key={index} className="fa fa-star-o"></i>
      ))}
    </div>
  );
};

export default StarRating;