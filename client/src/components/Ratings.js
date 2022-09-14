import React from "react";

const Ratings = ({ value, text }) => {
  return (
    <div className="rating">
      <span>
        {[...Array(5)].map((_, i) => {
          const cls =
            value >= i + 1
              ? "fas fa-heart" //full star
              : value >= i + 0.5
              ? "fas fa-heart-half-stroke" //half star
              : "far fa-heart"; //empty star
          return (
            <i
              key={"Star" + i}
              style={{ color: "indianred", margin: ".35px" }}
              className={cls}
            />
          );
        })}
      </span>
      <span>{text && text}</span>
    </div>
  );
};

export default Ratings;
