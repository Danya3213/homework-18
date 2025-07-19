import {useState, createContext, useEffect, useContext} from "react";

const FeedbackContext = createContext(null);

export const useFeedbackInfo = () => useContext(FeedbackContext);

export default function FeedbackInfoProvider ({children}) {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    useEffect(() => {

        setGood(0);
        setNeutral(0);
        setBad(0);

    }, []);

    return (
        <FeedbackContext.Provider
            value={{
                good,
                setGood,
                neutral,
                setNeutral,
                bad,
                setBad,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};