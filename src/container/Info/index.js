import React from 'react';
import Featuredevents from '../../components/Featuredevents';
import Trendingevents from '../../components/Trendingevents';
import infoStyle from "./styles/Info.module.css";


const Info = () => {
    return(
        <div>
        <Featuredevents />
        <Trendingevents />
        </div>
    )
}

export default Info;