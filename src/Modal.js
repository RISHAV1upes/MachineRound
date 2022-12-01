import React from "react";
import "./Modal.css";

const Modal = ({ data, toggle }) => {
  return (
    <div className="info">
      <div className="info-heading">
        <h4>{data.movie.title}</h4>
        <button type="button" className="cross btn btn-primary" onClick={toggle}>
          X
        </button>
      </div>
      <div className="info-body">
        <p><b>Overview : </b>{data.movie.overview}</p>
        <p><b>Popularity : </b>{data.movie.popularity}</p>
        <p><b>Release Date : </b>{data.movie.release_date}</p>
        <p><b>Genre : </b>{data.movie.genre_ids.map(genre=>`${genre},`)}</p>
        <p><b>Vote Count: </b>{data.movie.vote_count}</p>
        <p><b>Average Vote : </b>{data.movie.vote_average}</p>
      </div>
      <div className="info-footer">
        <button type="button" className="btn btn-primary float-end" onClick={toggle}>
          Close
        </button>
      </div>
    </div>
  );
};
export default Modal;
