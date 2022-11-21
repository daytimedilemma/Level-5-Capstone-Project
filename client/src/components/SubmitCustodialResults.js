import { set } from "mongoose"
import React, { useContext, useEffect, useState } from "react"
import { UseContext } from "../InputContext"
import EvenHolidays from "./seasonBreakInputs/EvenHolidays"
import OddHolidays from "./seasonBreakInputs/OddHolidays"

export default function SubmitCustodialResults() {
    const {
        summerList,
        year,
        childAndSeasonList,
        custodialParentData,
        setCustodialParentData,
        addCustodialParentData,
        getParentData
    } = useContext(UseContext)

    const singleEntry = childAndSeasonList.map((entry, index) => {
        return { ...entry, summerList, key: index }
    })
    const [allData, setAllData] = useState(singleEntry)
    

    const displayAllData = allData.map((data, index) => {
        // const summerData = data.map(summerEntry => {
        //     return (<li> {summerEntry.summerInputStart} through {summerEntry.summerInputEnd}</li>)
        // })
       const summerData = data.summerList
        console.log(allData[0])
        return (
            <form onSubmit={(event) => {
                event.preventDefault()
                addCustodialParentData(allData[0])
            }} key={index}>

                <h3>{data.childName}'s important dates</h3>
                {year % 2 === 0 ?
                    <>
                        {data.springBreakStartDate === "" ? <></>
                            :
                            <p>{year} Spring Break: {data.springBreakStartDate} through {data.springBreakEndDate}</p>}

                        {data.fallBreakStartDate === "" ? <></>
                            :
                            <p>{year} Fall Break: {data.fallBreakStartDate} through {data.fallBreakEndDate}</p>}

                        {data.winterBreakFirstHalfStartDate === "" ? <></>
                            :
                            <p>{year} Winter Break (First Half): {data.winterBreakFirstHalfStartDate} through {data.winterBreakFirstHalfEndDate}</p>}

                        {data.winterBreakSecondHalfStartDate === "" ? <></>
                            :
                            <p>{year + 1} Winter Break (Second Half): {data.winterBreakSecondHalfStartDate} through {data.winterBreakFirstHalfEndDate}</p>}
                    </>
                    :
                    <>
                        {data.winterBreakSecondHalfStartDate === "" ? <></>
                            :
                            <p>{year} Winter Break (Second Half): {data.winterBreakSecondHalfStartDate} through {data.winterBreakFirstHalfEndDate}</p>}

                        {data.springBreakStartDate === "" ? <></>
                            :
                            <p>{year+1} Spring Break: {data.springBreakStartDate} through {data.springBreakEndDate}</p>}

                        {data.fallBreakStartDate === "" ? <></>
                            :
                            <p>{year+1} Fall Break: {data.fallBreakStartDate} through {data.fallBreakEndDate}</p>}

                        {data.winterBreakFirstHalfStartDate === "" ? <></>
                            :
                            <p>{year+1} Winter Break (First Half): {data.winterBreakFirstHalfStartDate} through {data.winterBreakFirstHalfEndDate}</p>}
                    </>
                }
                <ul>
                    Summer Dates
                    {summerData.map((summerEntry, index) => <li key={index}>{summerEntry.summerInputStart} through {summerEntry.summerInputEnd}</li>)}
                </ul>
                <button>Submit New Entry</button>
            </form>
        )
    })
    function handleSubmit(e){
        e.preventDefault()
        addCustodialParentData(allData)
    }
    useEffect(() => {
        getParentData("custodialParent", setCustodialParentData)
    }, [])

    return (
        <>
            {displayAllData}
            <h1>Holidays for the year:</h1>
            <ul>
                {year % 2 === 0 ? <EvenHolidays /> :
                    <OddHolidays />
                }
            </ul>
        </>
    )
}