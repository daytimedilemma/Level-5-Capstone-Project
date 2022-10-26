import React, { useState, useContext, useEffect } from "react"
import ChildForm from "./ChildForm"
import SeasonalBreakInputs from "./seasonBreakInputs/SeasonalBreaksInput"
import { UseContext } from "../InputContext"

function CustodialParentView() {
    const [custodialParentData, setCustodialParentData] = useState([])

    const {getParentData, displayParentData} = useContext(UseContext)

    // const showData = displayParentData(custodialParentData)
    console.log(custodialParentData.child)

    useEffect(() => {
        getParentData("custodialParent", setCustodialParentData)
    }, [])
    return (
        <>
            <h1>Custodial Parent View</h1>
            <form>
                <ChildForm />
                <SeasonalBreakInputs/>
            </form>
            
        </>
    )
}

export default CustodialParentView