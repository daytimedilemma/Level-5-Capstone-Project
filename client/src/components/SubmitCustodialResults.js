import React, { useContext, useState } from "react"
import { UseContext } from "../InputContext"

export default function SubmitCustodialResults(){
    const {summerList, year} = useContext(UseContext)

    // const evenHolidays = {}
    // const oddHolidays = {}
    // const showHolidays 
    //  if(year % 2 === 0 {
        
    //     showHolidays = evenHolidays
    //     return (
    //         <></>
    //     )
    // })
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
            <h1>All holidays you have your child</h1>
            <ul>
                
            </ul>
        </>
    )
}