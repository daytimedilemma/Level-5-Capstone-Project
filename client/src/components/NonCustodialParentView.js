import React,{useState, useEffect, useContext} from "react"
import ChildForm from "./ChildForm"
import { UseContext } from "../InputContext"
import SeasonalBreakInputs from "./seasonBreakInputs/SeasonalBreaksInput"


function NonCustodialParentView() {
   
    const { 
        getParentData,
        nonCustodialParentData,
        setNonCustodialParentData
    } = useContext(UseContext)
    // const displayParentInputs = displayInputs("nonCustodialParent")

    useEffect(() => {
        getParentData("nonCustodialParent", setNonCustodialParentData)
    }, [])

    const displayData = nonCustodialParentData.map((data, index) => {
        const {childName, childBeginningSchoolTime, childEndingSchoolTime, childBirthday} = data
        return (
            <div key={index}>
                <h3>{childName}</h3>
                <h4>Birthday: {childBirthday}</h4>
                <p>{childName} is in school from {childBeginningSchoolTime}AM to {childEndingSchoolTime}PM</p>
            </div>
        )
    })

    return (
        <>
            <h1>Non Custodial Parent View</h1>
            <form>
                <SeasonalBreakInputs parent = "nonCustodialParent"/>
            </form>
            <h2>Your Kid(s)</h2>
            {displayData}
        </>
    )
}

export default NonCustodialParentView

