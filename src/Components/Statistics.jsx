export default ({statistics}) => {

    const {good, neutral, bad} = statistics;

    return (
        <>
            <section className="wrapper--section">
                <h2 className="wrapper__title">Statistics:</h2>

                {!(good + neutral + bad) ? <h3 className="wrapper__title--middle">There is no feedback</h3> :
                    <ul className="wrapper__list--statistics">
                        <li className="wrapper__list-item"><h4 className="wrapper__title--middle">Good: {good}</h4></li>
                        <li className="wrapper__list-item"><h4
                            className="wrapper__title--middle">Neutral: {neutral}</h4>
                        </li>
                        <li className="wrapper__list-item"><h4 className="wrapper__title--middle">Bad: {bad}</h4></li>
                        <li className="wrapper__list-item"><h4
                            className="wrapper__title--middle">Total: {good + neutral + bad}</h4></li>
                        <li className="wrapper__list-item"><h4 className="wrapper__title--middle">Positive
                            feedback: {Math.floor(good / (good + neutral + bad) * 100) || 0}%</h4>
                        </li>
                    </ul>}
            </section>
        </>
    );
};