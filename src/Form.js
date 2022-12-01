import React from "react";

const Form = ({ handleType, handleOrder, setSearchItem, filterGenre }) => {
  return (
    <div>
      <label>Sort By : </label>
      <select onChange={handleType} className="dropDown">
        <option value="popularity">Popularity</option>
        <option value="vote">Vote Count</option>
        <option value="vote_avg">Vote Average</option>
      </select>
      <select onChange={handleOrder} className="dropDown">
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
      <input
        type="text"
        className="form-control search"
        placeholder="Search on basis of title"
        onChange={(event) => setSearchItem(event)}
      />
      <div className="genre-search-btn">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => filterGenre("Action")}
        >
          Action
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => filterGenre("Fantasy")}
        >
          Fantasy
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => filterGenre("Comedy")}
        >
          Comedy
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => filterGenre("Crime")}
        >
          Crime
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => filterGenre("Horror")}
        >
          Horror
        </button>
      </div>
    </div>
  );
};
export default Form;
