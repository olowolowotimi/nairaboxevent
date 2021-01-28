import React from 'react';
import slideStyle from "./styles/Slider.module.css";
import Slider from "react-slick";




const Slide = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    dots: false,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    
      <Slider {...settings}>
        {/* <div className={slideStyle.cards}> */}
        <div className={`card ${slideStyle.container}`}>
          <img src="/static/img/concert.jpg" alt="concert" />
          <h3>Christmas Village ...</h3>
          <p>Abuja</p>
          <p>Starting from 1,500</p>
          <button>Buy Ticket</button>
        </div>
        <div className={`card ${slideStyle.container}`}>
          <img src="/static/img/concertimg.jpg" alt="concert" />
          <h3>STORMZY STOR ...</h3>
          <p>Abuja</p>
          <p>Starting from 1,500</p>
          <button>Buy Ticket</button>
        </div>
        <div className={`card ${slideStyle.container}`}>
          <img src="/static/img/concert.jpg" alt="concert" />
          <h3>Christmas Village ...</h3>
          <p>Abuja</p>
          <p>Starting from 1,500</p>
          <button>Buy Ticket</button>
        </div>
        <div className={`card ${slideStyle.container}`}>
          <img src="/static/img/concertimg.jpg" alt="concert" />
          <h3>STORMZY STOR ...</h3>
          <p>Abuja</p>
          <p>Starting from 1,500</p>
          <button>Buy Ticket</button>
        </div>
        <div className={`card ${slideStyle.container}`}>
          <img src="/static/img/concertimg.jpg" alt="concert" />
          <h3>STORMZY STOR ...</h3>
          <p>Abuja</p>
          <p>Starting from 1,500</p>
          <button>Buy Ticket</button>
        </div>
        
      </Slider>

    
  )
}
export default Slide;
