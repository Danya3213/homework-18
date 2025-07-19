import {useRef} from "react";
import {useFeedbackInfo} from "./FeedbackInfo.jsx";

export default () => {

    const {good, neutral, bad, setGood, setNeutral, setBad} = useFeedbackInfo();

    const button1 = useRef(null)
    const button2 = useRef(null)
    const button3 = useRef(null)

    return (
        <>
            <section className="wrapper--section">
                <h2 className="wrapper__title">Please, leave feedback</h2>
                <ul className="wrapper__list">
                    <li className="wrapper__list-item">
                        <button
                            className="wrapper__item-button"
                            ref={button1}
                            value={good}
                            onClick={(e) => {
                                setGood(good + 1);
                            }}
                            onKeyDown={(e) => {
                                e.key === 'ArrowRight' ? button2.current.focus() : "";
                            }}
                        >
                            Good
                        </button>
                    </li>
                    <li className="wrapper__list-item">
                        <button
                            className="wrapper__item-button"
                            ref={button2}
                            value={neutral}
                            onClick={(e) => {
                                setNeutral(neutral + 1);
                            }}
                            onKeyDown={(e) => {
                                e.key === 'ArrowLeft' ? button1.current.focus() : e.key === 'ArrowRight' ? button3.current.focus() : "";
                            }}
                        >
                            Neutral
                        </button>
                    </li>
                    <li className="wrapper__list-item">
                        <button
                            className="wrapper__item-button"
                            ref={button3}
                            value={bad}
                            onClick={(e) => {
                                setBad(bad + 1);
                            }}
                            onKeyDown={(e) => {
                                e.key === 'ArrowLeft' ? button2.current.focus() : "";
                            }}
                        >
                            Bad
                        </button>
                    </li>
                </ul>
            </section>
        </>
    );
};