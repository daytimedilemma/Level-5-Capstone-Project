import React, { useContext, useState } from "react"
import { UseContext } from "../InputContext"

export default function SubmitCustodialResults(){
    const {summerList} = useContext(UseContext)

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
        </>
    )
}