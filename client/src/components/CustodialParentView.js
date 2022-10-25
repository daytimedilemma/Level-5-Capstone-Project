import React from "react"
import ChildForm from "./ChildForm"
import FallBreak from "./seasonBreakInputs/FallBreak"

function CustodialParentView() {
    return (
        <>
            <h1>Custodial Parent View</h1>
            <form>
                <ChildForm />
                <FallBreak />
            </form>
        </>
    )
}

export default CustodialParentView