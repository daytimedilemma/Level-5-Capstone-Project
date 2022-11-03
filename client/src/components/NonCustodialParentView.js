import React,{ useEffect, useContext} from "react"
import { UseContext } from "../InputContext"
import SeasonalBreakInputs from "./seasonBreakInputs/SeasonalBreaksInput"


function NonCustodialParentView() {
   
    const { 
        getParentData,
        nonCustodialParentData,
        setNonCustodialParentData
    } = useContext(UseContext)
    

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
            <h1 className="welcome">Non-Custodial Parent</h1>
            <>
                <SeasonalBreakInputs 
                parent = "nonCustodialParent"
                data = {nonCustodialParentData}
                setData = {setNonCustodialParentData}
                />
            </>
            <h2>Your {nonCustodialParentData.length > 1 ? "Children" : "Child"}</h2>
            {displayData}
        </>
    )
}

export default NonCustodialParentView

