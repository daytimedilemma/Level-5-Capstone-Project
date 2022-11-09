import React, { useContext, useEffect } from "react"

import { UseContext } from "../InputContext"
import SeasonalBreakInputs from "./seasonBreakInputs/SeasonalBreaksInput"

function CustodialParentView() {

    const {
        getParentData,
        setCustodialParentData,
        custodialParentData,
    }
        = useContext(UseContext)

    useEffect(() => {
        getParentData("custodialParent", setCustodialParentData)
        
    }, [])
   
    const displayData = custodialParentData.map((data, index) => {
        const { childName, childBeginningSchoolTime, childEndingSchoolTime, childBirthday } = data
        return (
            <div key={index}>
                <h4>{childName}</h4>
                <p>DOB: {childBirthday}</p>
                <p>{childName} is in school from {childBeginningSchoolTime}AM to {childEndingSchoolTime}PM</p>
            </div>
        )
    })
    
    return (
        <>
            <h1 className="welcome">Custodial Parent</h1>
                <SeasonalBreakInputs 
                parent = "custodialParent"
                data = {custodialParentData}
                setData = {setCustodialParentData}
                /> 
            
            <h3>Your {custodialParentData.length > 1 ? "Children" : "Child"}</h3>
        
            {displayData}
        </>
    )
}

export default CustodialParentView