import React from "react";
import cardStyle from "./styles/Cardinput.module.css";

const Cardinput = () => {
  return (
    <div className={cardStyle.details}>
      <h1>Find an event near you</h1>
      <div className={cardStyle.search}>
        <input
          type="text"
          placeholder="search for an event by name,state or city..."
        />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Cardinput;
