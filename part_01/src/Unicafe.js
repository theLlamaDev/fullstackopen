import { useState } from "react";

const Statistics = ({good, neutral, bad, total, average, posPer}) => {
    if (total === 0) {
        return (
            <div>
                <p>No statistics yet.</p>
            </div>
        )
    }

    return (
        <table>
            <tbody>
                <StatisticLine text = "Good" value = {good} />
                <StatisticLine text = "Neutral" value = {neutral} />
                <StatisticLine text = "Bad" value = {bad} />
                <StatisticLine text = "Total" value = {total} />
                <StatisticLine text = "Average" value = {average} />
                <StatisticLine text = "Positive percentage" value = {posPer} />
            </tbody>
        </table>
    )
}

const StatisticLine = ({text, value}) => {
    return <tr><td>{text}</td><td>{value}</td></tr>
}

const Button = ({onClick, text}) => {
    return <button onClick={onClick}>{text}</button>
}


function Unicafe() {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const [total, setTotal] = useState(0);
    const [average, setAvg] = useState(0);
    const [posPer, setPosPer] = useState(0);

    const updateGood = () => {
        setGood(good + 1);
        return 1;
    }

    const updateBad = () => {
        setBad(bad + 1);
        return -1;
    }

    const updateNeutral = () => {
        setNeutral(neutral + 1);
        return 0;
    }

    function update (props) {
        let addition = props()
        
        setTotal(total + 1)
        setAvg(good - bad + addition)

        if(addition > 0) {
            setPosPer((100 * (good + 1)) / (good + bad + neutral + 1))
        } else {
            setPosPer((100 * good) / (good + bad + neutral + 1))
        }
    }

    return (
        <div>
            <h1>Give feedback</h1>
            <Button onClick = {() => update(updateGood)} text = "Good" />
            <Button onClick = {() => update(updateNeutral)} text = "Neutral" />
            <Button onClick = {() => update(updateBad)} text = "Bad" />

            <h1>Statistics</h1>
            <Statistics good = {good} neutral = {neutral} bad = {bad} total = {total} average = {average} posPer = {posPer} />
        </div>
    )
}

export default Unicafe;