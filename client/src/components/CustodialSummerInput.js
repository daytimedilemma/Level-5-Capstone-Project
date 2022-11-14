
import React, { useContext, useState } from "react"
import { UseContext } from "../InputContext"
import { useNavigate } from "react-router-dom"



export default function CustodialSummerInput() {
    const navigate = useNavigate()
    const { custodialParentData,
        setCustodialParentData,
        summerList,
        setSummerList,
        childAndSeasonList,
        setChildAndSeasonList
    } = useContext(UseContext)



    const summerInputInit =
    {
        summerInputStart: "",
        summerInputEnd: ""
    }

    const [summerInput, setSummerInput] = useState(summerInputInit)

   

    function handleChange(e) {
        const { name, value } = e.target
        setSummerInput(prevSummerInput => {
            return {
                ...prevSummerInput,
                [name]: value
            }
        })
    }
    
    function handleSummerSubmit(e) {
        e.preventDefault()
        setSummerList(prevSummerList => [...prevSummerList, summerInput])
    }

    const displayList = summerList.map((item, index) => {
        return (
            <>
                <br />
                <span key={index}>{item.summerInputStart} through {item.summerInputEnd}</span>
            </>
        )
    })
    // const n = 8; // Or something else

    // const displayTest = [...Array(n)].map((e, i) => <><br/><h1 key={i} />Test<h1/></>)

    return (
        <>
            
            <form onSubmit={handleSummerSubmit}>
                <label>
                    Summer Input
                    <input
                        type="date"
                        name="summerInputStart"
                        value={summerInput.summerInputStart}
                        onChange={handleChange}
                    />
                    <input
                        type="date"
                        name="summerInputEnd"
                        value={summerInput.summerInputEnd}
                        onChange={handleChange}
                    />

                </label>
                <button>Add Summer Date</button>
            </form>
            {displayList}
            <button onClick={() => navigate("/submitCustodialResults")}>Review Entry</button>
        </>
    )
}