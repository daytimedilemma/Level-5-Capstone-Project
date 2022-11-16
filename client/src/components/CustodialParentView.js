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

    console.log(childAndSeasonList)

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
        const { childName, childBeginningSchoolTime, childEndingSchoolTime, childBirthday } = entry
        return (
            <div key={index}>
                <h4>{childName}</h4>
                <p>DOB: {childBirthday}</p>
                <p>{childName} is in school from {childBeginningSchoolTime}AM to {childEndingSchoolTime}PM</p>
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
                <>
                    <h3>Pending Child List</h3>
                    {displayChildAndSeasonList}
                </>
                :
                <></>
            }
            <button onClick={() => navigate("/custodialSummerInput")}>Summer Date Inputs</button>
            <h3>Your {custodialParentData.length > 1 ? "Children" : "Child"}</h3>
            {displayData}

        </>
    )
}

export default CustodialParentView