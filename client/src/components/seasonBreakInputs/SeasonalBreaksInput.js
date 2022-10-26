import React, { useContext } from "react"
import { UseContext } from "../../InputContext"

export default function SeasonalBreakInputs(props) {
    const { fallBreak,
        setFallBreak,
        seasonalInputs,
        winterBreakFirstHalf,
        setWinterBreakFirstHalf,
        winterBreakSecondHalf,
        setWinterBreakSecondHalf,
        springBreak,
        setSpringBreak
    } = useContext(UseContext)

    const fallBreakInput = seasonalInputs(fallBreak, setFallBreak)

    const winterBreakFirstHalfInput = seasonalInputs(winterBreakFirstHalf, setWinterBreakFirstHalf)

    const winterBreakSecondHalfInput = seasonalInputs(winterBreakSecondHalf, setWinterBreakSecondHalf)

    const springBreakInput = seasonalInputs(springBreak, setSpringBreak)
    // console.log(fallBreak)
    // console.log(winterBreakFirstHalf)
    // console.log(winterBreakSecondHalf)
   
    
    return (
        <>
            {fallBreakInput}
            {winterBreakFirstHalfInput}
            {winterBreakSecondHalfInput}
            {springBreakInput}
        </>
    )
   
}