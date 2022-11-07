import React, { useState, useContext } from "react"
import { UseContext } from "../../InputContext"
import "../../style.css"
import NonCustodialWeekDayInput from "./NonCustodialWeekDayInput"
import SummerBreakInputs from "./SummerBreakInputs"


export default function SeasonalBreakInputs(props) {

    const { year,
        addNonCustodialParentData,
        addCustodialParentData,
    
    } = useContext(UseContext)



    function seasonalInputs() {
        if (props.parent === "custodialParent") {
            return year % 2 === 0 ?
                (
                    <>
                        <label>
                            Second Half of Winter Break
                            <input
                                type="date"
                                name="winterBreakSecondHalfStartDate"
                                value={childAndSeasonInput.winterBreakSecondHalfStartDate}
                                onChange={handleChange} />
                        </label>

                        <label>
                            --
                            <input
                                type="date"
                                name="winterBreakSecondHalfEndDate"
                                value={childAndSeasonInput.winterBreakSecondHalfEndDate}
                                onChange={handleChange} />
                        </label>
                        <br />
                        <label>
                            Spring Break
                            <input
                                type="date"
                                name="springBreakStartDate"
                                value={childAndSeasonInput.springBreakStartDate}
                                onChange={handleChange} />
                        </label>

                        <label>
                            --
                            <input
                                type="date"
                                name="springBreakEndDate"
                                value={childAndSeasonInput.springBreakEndDate}
                                onChange={handleChange} />
                        </label>
                    </>
                )
                :
                (
                    <>
                        <label>
                            Fall Break:
                            <input
                                type="date"
                                name="fallBreakStartDate"
                                value={childAndSeasonInput.fallBreakStartDate}
                                onChange={handleChange} />
                        </label>

                        <label>
                            --
                            <input
                                type="date"
                                name="fallBreakEndDate"
                                value={childAndSeasonInput.fallBreakEndDate}
                                onChange={handleChange} />
                        </label>

                        <label>
                            First Half of Winter Break:
                            <input
                                type="date"
                                name="winterBreakFirstHalfStartDate"
                                value={childAndSeasonInput.winterBreakFirstHalfStartDate}
                                onChange={handleChange} />
                        </label>

                        <label>
                            --
                            <input
                                type="date"
                                name="winterBreakFirstHalfEndDate"
                                value={childAndSeasonInput.winterBreakFirstHalfEndDate}
                                onChange={handleChange} />
                        </label>
                    </>
                )
        } else if (props.parent === "nonCustodialParent") {
            return year % 2 === 0 ?
                (
                    <>
                        <label>
                            Fall Break:
                            <input
                                type="date"
                                name="fallBreakStartDate"
                                value={childAndSeasonInput.fallBreakStartDate}
                                onChange={handleChange} />
                        </label>

                        <label>
                            --
                            <input
                                type="date"
                                name="fallBreakEndDate"
                                value={childAndSeasonInput.fallBreakEndDate}
                                onChange={handleChange} />
                        </label>
                        <br />
                        <label>
                            First Half of Winter Break:
                            <input
                                type="date"
                                name="winterBreakFirstHalfStartDate"
                                value={childAndSeasonInput.winterBreakFirstHalfStartDate}
                                onChange={handleChange} />
                        </label>

                        <label>
                            --
                            <input
                                type="date"
                                name="winterBreakFirstHalfEndDate"
                                value={childAndSeasonInput.winterBreakFirstHalfEndDate}
                                onChange={handleChange} />
                        </label>
                    </>
                )
                :
                (
                    <>
                        <br />
                        <label>
                            Second Half of Winter Break:
                            <input
                                type="date"
                                name="winterBreakSecondHalfStartDate"
                                value={childAndSeasonInput.winterBreakSecondHalfStartDate}
                                onChange={handleChange} />
                        </label>

                        <label>
                            --
                            <input
                                type="date"
                                name="winterBreakSecondHalfEndDate"
                                value={childAndSeasonInput.winterBreakSecondHalfEndDate}
                                onChange={handleChange} />
                        </label>
                        <br />
                        <label>
                            Spring Break:
                            <input
                                type="date"
                                name="springBreakStartDate"
                                value={childAndSeasonInput.springBreakStartDate}
                                onChange={handleChange} />
                        </label>

                        <label>
                            --
                            <input
                                type="date"
                                name="springBreakEndDate"
                                value={childAndSeasonInput.springBreakEndDate}
                                onChange={handleChange} />
                        </label>
                    </>

                )
        }
    }


    const childAndSeasonInputInit = {
        childName: "",
        childBeginningSchoolTime: "08:00",
        childEndingSchoolTime: "03:00",
        childBirthday: "",
        fallBreakStartDate: "",
        fallBreakEndDate: "",
        winterBreakFirstHalfStartDate: "",
        winterBreakFirstHalfEndDate: "",
        winterBreakSecondHalfStartDate: "",
        winterBreakSecondHalfEndDate: "",
        springBreakStartDate: "",
        springBreakEndDate: ""
    }

    const [childAndSeasonInput, setChildAndSeasonInput] = useState(childAndSeasonInputInit)

    function handleSubmit(e) {
        e.preventDefault()
        if (props.parent === "custodialParent") {
            addCustodialParentData(childAndSeasonInput)
            
        } else if (props.parent === "nonCustodialParent") {
            addNonCustodialParentData(childAndSeasonInput)
        }
        setChildAndSeasonInput(childAndSeasonInputInit)
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setChildAndSeasonInput((prevChild) => {
            return {
                ...prevChild,
                [name]: value
            };
        });
      }

      

const displaySeasonalInputs = seasonalInputs()

return (
    <>
    <form onSubmit={handleSubmit} className="form">
        
        <label>
        Child's Name:
            <input
                type="text"
                value={childAndSeasonInput.childName}
                name="childName"
                onChange={handleChange}
                placeholder="child's name"
            />
        </label>
        
        <label>
        School Start Time:
            <input
                type="time"
                value={childAndSeasonInput.childBeginningSchoolTime}
                name="childBeginningSchoolTime"
                max=""
                onChange={handleChange}
            />
        </label>

        <label>
            School End Time
            <input
                type="time"
                value={childAndSeasonInput.childEndingSchoolTime}
                name="childEndingSchoolTime"
                max=""
                onChange={handleChange}
            />
        </label>

        <label>
            Your Child's Birthday:
            <input
                type="date"
                name="childBirthday"
                value={childAndSeasonInput.childBirthday}
                onChange={handleChange} />
        </label>
        <NonCustodialWeekDayInput />
        <h3>Seasonal Breaks for the School Year of {year} - {year + 1}</h3>
        {displaySeasonalInputs}
        <br/>
        {/* <SummerBreakInputs /> */}
        <br />
        <button>Submit Child Entry</button>
        </form>
    </>
)


}