import React from 'react';
import freeStyle from "./styles/Freeevents.module.css";

const Freeevents = () => {
    return (
        <div className={freeStyle.free}>

            <h1>Free Events</h1>
            <button>show All Event</button>
            <div className={freeStyle.categories}>
                <h1>Event Categories</h1>
            </div>
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
            </div>
            <div className={freeStyle.secondcards}>
            <div className={`card ${freeStyle.lowercards} `}>
                    <h3>Party</h3>

                </div>
                <div className={`card ${freeStyle.lowercards} `}>
                    <h3>Business</h3>

                </div>
                <div className={`card ${freeStyle.lowercards} `}>
                    <h3>Food & Drink</h3>

                </div>
                <div className={`card ${freeStyle.lowercards} `}>
                    <h3>Play</h3>

                </div>
                <div className={`card ${freeStyle.lowercards} `}>
                    <h3>Social</h3>

                </div>
                <div className={`card ${freeStyle.lowercards} `}>
                    <h3>Gallery</h3>

                </div>

            </div>
        </div>


    )
}
export default Freeevents;