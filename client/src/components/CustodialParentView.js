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
                <h3>{childName}</h3>
                <h4>Birthday: {childBirthday}</h4>
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
            
            <h2>Your Kid(s)</h2>
            {displayData}
        </>
    )
}

export default CustodialParentView