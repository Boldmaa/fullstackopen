import {useState} from 'react'
import ReactDOM from 'react-dom/client';

function App() {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)

    const refresh = () => {
        ReactDOM.createRoot(document.getElementById('root')).render(
            <App />
        )
    }

    const goodClick = () => {
        setGood(good + 1);
        // refresh();
        console.log('good', good);
        console.log('1', all);
        let all_clicks = good + neutral + bad;
        console.log('2', all_clicks);
        setAll(all_clicks);
        console.log('3', all);
    }

    const neutralClick = () => {
        setNeutral(neutral + 1);
        setAll(good + neutral + bad);
    }

    const badClick = () => {
        setBad(bad + 1);
        setAll(good + neutral + bad);
    }

    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={goodClick}>good</button>
            <button onClick={neutralClick}>neutral</button>
            <button onClick={badClick}>bad</button>

            <h1>statistics</h1>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {all}</p>
            <p>average {all}</p>
            <p>positive {all}</p>
        </div>
    );
}

export default App;
