import React from 'react';
import trendStyle from "./styles/Trendingevents.module.css";

const Trendingevents = () => {
  return (
    <div className={trendStyle.trend}>
      <div className={trendStyle.text}>
        <h1>Trending Events <span>(View All Events)</span></h1>
      </div>
      <div className={trendStyle.cards}>
        <div className={`card ${trendStyle.container}`}>
          <img src="/static/img/concert.jpg" alt="concert" />
          <h3>Christmas Village ...</h3>
          <p>Abuja</p>
          <p>Starting from 1,500</p>
          <button>Buy Ticket</button>
        </div>
        <div className={`card ${trendStyle.container}`}>
          <img src="/static/img/concertimg.jpg" alt="concert" />
          <h3>STORMZY STOR ...</h3>
          <p>Abuja</p>
          <p>Starting from 1,500</p>
          <button>Buy Ticket</button>
        </div>
      </div>
    </div>
  )
}

export default Trendingevents;
