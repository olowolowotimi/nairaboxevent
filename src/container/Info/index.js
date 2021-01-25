import React from 'react';
import Brands from '../../components/Brands';
import Featuredevents from '../../components/Featuredevents';
import Freeevents from '../../components/Freeevents';
import Trendingevents from '../../components/Trendingevents';
import infoStyle from "./styles/Info.module.css";


const Info = () => {
    return(
        <div>
        <Featuredevents />
        <Trendingevents />
        <Freeevents />
        <Brands />
        </div>
    )
}

export default Info;