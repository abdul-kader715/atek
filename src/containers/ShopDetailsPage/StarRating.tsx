import React from "react";

interface StarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onRatingChange }) => {
  const handleClick = (star: number) => {
    onRatingChange(star);
  };

  return (
    <div className="form-group rating-select d-flex align-items-center">
      <label>Your Rating</label>
      <p className="stars">
        <span>
          {[1, 2, 3, 4, 5].map((star) => (
            <a
              key={star}
              href="#"
              className={`star-${star} ${rating >= star ? "active" : ""}`}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                handleClick(star);
              }}
            >
              ★
            </a>
          ))}
        </span>
      </p>
    </div>
  );
};

export default StarRating;