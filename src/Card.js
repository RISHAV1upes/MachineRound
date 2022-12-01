import React from "react";

const Card = ({ movie, handleClick }) => {
  return (
    <div className="movie col-sm-3" key={movie.id}>
      <img className="images img-responsive" src={movie.poster_path} />

      <div>
        <h4>{movie.title}</h4>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => handleClick(movie)}
      >
        See More
      </button>
    </div>
  );
};
export default Card;
