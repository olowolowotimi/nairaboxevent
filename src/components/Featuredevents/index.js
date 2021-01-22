import React from "react";
import featureStyle from "./styles/Featuredevents.module.css";

const Featuredevents = () => {
  return (
    <div className={featureStyle.events}>
      <h1>Featured Events</h1>
      <div className={featureStyle.cards}>
        <div className={`card ${featureStyle.container}`}>
          <img src="/static/img/concert.jpg" alt="concert" />
          <h3>Christmas Village ...</h3>
          <p>Abuja</p>
          <p>Starting from 1,500</p>
          <button>Buy Ticket</button>
        </div>
        <div className={`card ${featureStyle.container}`}>
          <img src="/static/img/concertimg.jpg" alt="concert" />
          <h3>STORMZY STOR ...</h3>
          <p>Abuja</p>
          <p>Starting from 1,500</p>
          <button>Buy Ticket</button>
        </div>
        <div className={`card ${featureStyle.container}`}>
          <img src="/static/img/concert.jpg" alt="concert" />
          <h3>Christmas Village ...</h3>
          <p>Abuja</p>
          <p>Starting from 1,500</p>
          <button>Buy Ticket</button>
        </div>
        <div className={`card ${featureStyle.container}`}>
          <img src="/static/img/concertimg.jpg" alt="concert" />
          <h3>STORMZY STOR ...</h3>
          <p>Abuja</p>
          <p>Starting from 1,500</p>
          <button>Buy Ticket</button>
        </div>
      </div>
    </div>
  );
};

export default Featuredevents;
