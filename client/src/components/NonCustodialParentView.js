import React from "react"
import ChildForm from "./ChildForm"
import SeasonalBreakInputs from "./seasonBreakInputs/SeasonalBreaksInput"

function NonCustodialParentView() {
    return (
        <>
            <h1>Non Custodial Parent View</h1>
            <form>
                <ChildForm />
                <SeasonalBreakInputs/>
            </form>
        </>
    )
}

export default NonCustodialParentView

