import React from 'react';
import footStyle from "./styles/Footer.module.css";

const Footer = () => {
    return(
        <div className={footStyle.background}>
            <div className={footStyle.content}>
                <div className={footStyle.about}>
                    <h4>More About Us</h4>
                    <p>About</p>
                    <p>Our Outlets</p>
                    <p>Merchandise</p>
                    <p>Contact Us</p>
                </div>
                <div className={footStyle.about}>
                    <h4>Top Categories</h4>
                    <p>Music Event</p>
                    <p>Fashion Event</p>
                    <p>Live Show Event</p>
                    <p>Comedy Event</p>
                </div>
                <div className={footStyle.about}>
                    <h4>Connect with us on social media</h4>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    
                </div>
                <div className={footStyle.about}>
                    <h4>Get Our App</h4>
                    <div className={footStyle.images}>
                    <img src="/static/img/appstore.png" alt="appstore" />
                    <img src="/static/img/google.png" alt="google" />
                    </div>
                    
                </div>
            </div>
            <hr />
            <div className={footStyle.copyright}>
                <p>2018 All Rights Reserved, Nairabox</p>
                <p>Refund & Cancellation Policy, Terms & Condition</p>
            </div>
        </div>
    )
}

export default Footer;