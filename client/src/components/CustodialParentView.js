import React, { useContext, useEffect } from "react"
import ChildForm from "./ChildForm"
import { UseContext } from "../InputContext"
import SeasonalBreakInputs from "./seasonBreakInputs/SeasonalBreaksInput"

function CustodialParentView() {
    // const [custodialParentData, setCustodialParentData] = useState([])

    const {
        getParentData,
        setCustodialParentData,
        custodialParentData,
        handleSubmit
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
            <br/>
            <h3>Your Child(ren):</h3>
            {displayData}
        </>
    )
}

export default CustodialParentView