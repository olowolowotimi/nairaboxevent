import React from "react";
import Slide from "../Slide";
import featureStyle from "./styles/Featuredevents.module.css";

const Featuredevents = () => {
  return (
    <div className={featureStyle.events}>
      <h1>Featured Events</h1>

      <Slide />
    </div>

  );
};

export default Featuredevents;
