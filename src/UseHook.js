import { useState, useEffect } from "react";

const UseHook = () => {
  const movieData = require("./MovieData.json");
  const [data, setData] = useState([]);
  const [modalContent, setModalContent] = useState({});
  const [toggle, setToggle] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortType, setSortType] = useState("popularity");
  const [searchQuery, setSearchQuery] = useState("");

  const handleClick = (movie) => {
    setModalContent({ movie });
    setToggle((prevState) => !prevState);
  };

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  const handleType = (event) => setSortType(event.target.value);

  const handleOrder = (event) => setSortOrder(event.target.value);

  const setSearchItem=(event)=>setSearchQuery(event.target.value)

  const filterGenre = (genre) =>
    setData(movieData.filter((movie) => movie.genre_ids.includes(genre)));

  useEffect(() => {
    const sortArray = (type) => {
      const sortTypes = {
        vote: "vote_count",
        popularity: "popularity",
        vote_avg: "vote_average",
      };
      const sortProperty = sortTypes[type];
      let sortedData;
      sortOrder === "asc"
        ? (sortedData = [...movieData].sort(
            (a, b) => a[sortProperty] - b[sortProperty]
          ))
        : (sortedData = [...movieData].sort(
            (a, b) => b[sortProperty] - a[sortProperty]
          ));
      setData(sortedData);
    };
    sortArray(sortType);
  }, [sortType, sortOrder]);

  return {
    data,
    modalContent,
    toggle,
    searchQuery,
    handleClick,
    handleType,
    handleOrder,
    filterGenre,
    handleToggle,
    setSearchItem
  };
};
export default UseHook;
