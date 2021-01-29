import React from "react";
import freeStyle from "./styles/Freeevents.module.css";

const Freeevents = () => {
  return (
    <div className={freeStyle.free}>
      <h1>Free Events</h1>
      <div className={freeStyle.eventBtn}>
        <button>show All Event</button>
      </div>
      <div className={freeStyle.categories}>
        <h1>Event Categories</h1>
      </div>
      {/* <div className={freeStyle.allcards}> */}
        <div className={freeStyle.firstcards}>
          <div className={`card ${freeStyle.uppercards} `}>
            <h3>Music</h3>
          </div>
          <div className={`card ${freeStyle.uppercards} `}>
            <h3>Comedy</h3>
          </div>
          <div className={`card ${freeStyle.uppercards} `}>
            <h3>Fashion</h3>
          </div>
          <div className={`card ${freeStyle.uppercards} `}>
            <h3>Sport</h3>
          </div>
          <div className={`card ${freeStyle.uppercards} `}>
            <h3>Exhibition</h3>
          </div>
          <div className={`card ${freeStyle.uppercards} `}>
            <h3>Live Show</h3>
          </div>
          <div className={`card ${freeStyle.uppercards} `}>
            <h3>Party</h3>
          </div>
          <div className={`card ${freeStyle.uppercards} `}>
            <h3>Business</h3>
          </div>
          <div className={`card ${freeStyle.uppercards} `}>
            <h3>Food & Drink</h3>
          </div>
          <div className={`card ${freeStyle.uppercards} `}>
            <h3>Play</h3>
          </div>
          <div className={`card ${freeStyle.uppercards} `}>
            <h3>Social</h3>
          </div>
          <div className={`card ${freeStyle.uppercards} `}>
            <h3>Gallery</h3>
          </div>
        </div>
      </div>
    // </div>
  );
};
export default Freeevents;
