import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UseContext } from "../InputContext"
import SeasonalBreakInputs from "./seasonBreakInputs/SeasonalBreaksInput"

function CustodialParentView() {

    const {
        getParentData,
        setCustodialParentData,
        custodialParentData,
        childAndSeasonList,
        setChildAndSeasonList
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

    const displayChildAndSeasonList = childAndSeasonList.map((entry, index) => {
        const { childName, childBeginningSchoolTime, childEndingSchoolTime, childBirthday, winterBreakFirstHalfStartDate, winterBreakFirstHalfEndDate } = entry
        return (
            <div key={index}>
                <h3>New Entry</h3>
                <h4>{childName}</h4>
                <p>DOB: {childBirthday}</p>
                <p>{childName} is in school from {childBeginningSchoolTime}AM to {childEndingSchoolTime}PM</p>
                <p>The first half of their Winter Break is {winterBreakFirstHalfStartDate} to {winterBreakFirstHalfEndDate}</p>
            </div>
        )
    })


    const navigate = useNavigate()

    return (
        <>
            <h1 className="welcome">Custodial Parent</h1>
            <SeasonalBreakInputs
                parent="custodialParent"
                data={custodialParentData}
                setData={setCustodialParentData}
            />
            {childAndSeasonList.length >= 1 ?
                { displayChildAndSeasonList }
                :
                <></>
            }
            <h3>Your {custodialParentData.length > 1 ? "Children" : "Child"}</h3>

            {displayData}
            <button onClick={() => navigate("/custodialSummerInput")}>Summer Date Inputs</button>
        </>
    )
}

export default CustodialParentView