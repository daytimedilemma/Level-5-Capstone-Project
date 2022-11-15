import React, { useContext, useState } from "react"
import { UseContext } from "../InputContext"
import EvenHolidays from "./seasonBreakInputs/EvenHolidays"
import OddHolidays from "./seasonBreakInputs/OddHolidays"

export default function SubmitCustodialResults(){
    const {summerList, year} = useContext(UseContext)

    // const showEvenHolidays = EvenHolidays
    // console.log(showEvenHolidays)
    // const evenHolidays = {}
    // const oddHolidays = {}
    // const showEvenHolidays = {
    //     if(year % 2 === 0) {
    //         //const showHolidays = EvenHolidays
    //       }
    // }
     

    const displayList = summerList.map((item, index) => {
        return (
            <>
                <br/>
                <span key={index}>{item.summerInputStart} through {item.summerInputEnd}</span>
            </>
        )
    })

    return (
        <>
            {displayList}
            <h1>All holidays you have your child:</h1>
            <ul>
               {year % 2 === 0 ? <EvenHolidays/>:
               <OddHolidays/>
               }
            </ul>
        </>
    )
}