import React from "react";
import UseHook from "./UseHook";
import Modal from "./Modal";
import Card from "./Card";
import "./App.css";
import Form from "./Form";

const App = () => {
  const {
    data,
    modalContent,
    toggle,
    searchQuery,
    handleClick,
    handleType,
    handleOrder,
    filterGenre,
    handleToggle,
    setSearchItem,
  } = UseHook();

  return (
    <>
      <div
        className="container-fluid row"
        style={toggle ? { filter: "blur(5px)" } : {}}
      >
        <Form
          handleType={handleType}
          handleOrder={handleOrder}
          setSearchItem={setSearchItem}
          filterGenre={filterGenre}
        />
        {data
          .filter((mov) => mov.title.toLowerCase().includes(searchQuery))
          .map((movie) => (
            <Card movie={movie} handleClick={handleClick} />
          ))}
      </div>
      {toggle && <Modal data={modalContent} toggle={handleToggle} />}
    </>
  );
};
export default App;
