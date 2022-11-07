import React, { useState } from "react"

export default function SummerBreakInputs() {
    const [uninterruptedBreakInput, setUninterruptedBreakInput] = useState()
    const [uninterruptedSummerBreakinit, setUninterruptedSummerBreakinit] = useState({
        uninterruptedSummmerBreakStartDate: "",
        uninterruptedSummmerBreakEndDate: "",
    })

    const input = (<label>
        Summer Break Inputs
        <input
            value={uninterruptedSummerBreakinit.uninterruptedSummmerBreakStartDate}
            name="uninterruptedSummmerBreakStartDate"
            type="date"
            onChange={handleChange}
        />
        <input
            value={uninterruptedSummerBreakinit.uninterruptedSummmerBreakEndDate}
            name="uninterruptedSummmerBreakEndDate"
            type="date"
            onChange={handleChange}
        />
    </label>)


    const [inputCount, setInputCount] = useState([input])

    function addInput() {
        setInputCount(prevCount => [...prevCount, input])
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setUninterruptedSummerBreakinit((prevSummer) => {
            return {
                ...prevSummer,
                [name]: value
            };
        });
    }

    return (
        <>
            <div>
                {inputCount.map((count, index) => <div key={index}>{count}</div>)}
                <button onClick={addInput}>Add Summer Input</button>
            </div>
        </>
    )
}