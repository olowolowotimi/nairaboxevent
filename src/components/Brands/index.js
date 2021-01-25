import React from 'react';
import brandStyle from "./styles/Brand.module.css";


const Brands = () =>{
    return(
        <div className={brandStyle.brands}>
            <h2>Few of the Brands that Engage with Us</h2>
            <div className={brandStyle.images}>
                <img src="/static/img/castle.png" alt="castle" />
                <img src="/static/img/coca.png" alt="coca" />
                <img src="/static/img/davido.png" alt="davido" />
                <img src="/static/img/dmw.png" alt="dmw" />
                <img src="/static/img/theplug.png" alt="theplug" />
            </div>
        </div>
    )
}

export default Brands;