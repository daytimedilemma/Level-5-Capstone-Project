import React, { useState } from "react";
import SummerBreakInputs from "./SummerBreakInputs";

export default function CounterInputsFunction() {
    const [count, setCount] = useState([])

    function addInput() {
        setCount(prevCount => [...prevCount, <SummerBreakInputs />])
    }

    return (
        <>
            {count}
            <button onClick={addInput}>Add Summer Input</button>
        </>
    )
}