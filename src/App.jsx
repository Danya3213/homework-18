import {useState, useEffect} from "react";
import "./index.scss";
import Feedback from "./Components/Feedback.jsx";
import Statistics from "./Components/Statistics.jsx";
import FeedbackInfoProvider from "./Components/FeedbackInfo.jsx";

export default () => {



    return (
        <FeedbackInfoProvider>
            <Feedback/>
            <Statistics/>
        </FeedbackInfoProvider>
    );
};