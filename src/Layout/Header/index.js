import React from "react";
import Cardinput from "../../components/Cardinput";
import topStyle from "./styles/Header.module.css";

const Header = () => {
  return (
    <div className={topStyle.content}>
      <div className={topStyle.head}>
        <a href="">
          <img src="/static/img/nairabox_white.png" alt="logo" />
        </a>
        <div className={topStyle.list}>

          <ul>
            <li>Help</li>
            <li>Blog</li>
            <li>Merch</li>
            <li>Signup</li>
            <li>Login</li>
          </ul>

          <button>Create Event</button>
        </div>
      </div>

      <div className={topStyle.img}>
        <img src="/static/img/stormzyimg.jpg" alt="stormzy img" />
        
        <Cardinput className={topStyle.card} />
      </div>

    </div>
  );
};

export default Header;
