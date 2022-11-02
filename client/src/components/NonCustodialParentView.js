import React,{useState, useEffect, useContext} from "react"
import ChildForm from "./ChildForm"
import { UseContext } from "../InputContext"
import SeasonalBreakInputs from "./seasonBreakInputs/SeasonalBreaksInput"


function NonCustodialParentView() {
    const [nonCustodialParentData, setNonCustodialParentData] = useState([])
    const { getParentData, displayInputs} = useContext(UseContext)
    // const displayParentInputs = displayInputs("nonCustodialParent")

    useEffect(() => {
        getParentData("nonCustodialParent", setNonCustodialParentData)
    }, [])

    const displayData = nonCustodialParentData.map((data, index) => {
        const {childName, childBeginningSchoolTime, childEndingSchoolTime, childBirthday} = data
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
            <h1 className="welcome">Non-Custodial Parent</h1>
            <form>
                <SeasonalBreakInputs parent = "nonCustodialParent"/>
            </form>
            <h3>Your Child(ren):</h3>
            {displayData}
        </>
    )
}

export default NonCustodialParentView

