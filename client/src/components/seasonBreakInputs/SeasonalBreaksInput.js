import React, { useState, useContext } from "react"
import { UseContext } from "../../InputContext"

export default function SeasonalBreakInputs(props) {

    const { year, addNonCustodialParentData, addCustodialParentData} = useContext(UseContext)



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
                                value={childAndSeasonInputInit.winterBreakSecondHalfStartDate}
                                onChange={handleChange} />
                        </label>

                        <label>
                            --
                            <input
                                type="date"
                                name="winterBreakSecondHalfEndDate"
                                value={childAndSeasonInputInit.winterBreakSecondHalfEndDate}
                                onChange={handleChange} />
                        </label>
                        <br />
                        <label>
                            Spring Break
                            <input
                                type="date"
                                name="springBreakStartDate"
                                value={childAndSeasonInputInit.springBreakStartDate}
                                onChange={handleChange} />
                        </label>

                        <label>
                            --
                            <input
                                type="date"
                                name="springBreakEndDate"
                                value={childAndSeasonInputInit.springBreakEndDate}
                                onChange={handleChange} />
                        </label>
                    </>
                )
                :
                (
                    <>
                        <label>
                            Fall Break
                            <input
                                type="date"
                                name="fallBreakStartDate"
                                value={childAndSeasonInputInit.fallBreakStartDate}
                                onChange={handleChange} />
                        </label>

                        <label>
                            --
                            <input
                                type="date"
                                name="fallBreakEndDate"
                                value={childAndSeasonInputInit.fallBreakEndDate}
                                onChange={handleChange} />
                        </label>

                        <label>
                            First Half of Winter Break
                            <input
                                type="date"
                                name="winterBreakFirstHalfStartDate"
                                value={childAndSeasonInputInit.winterBreakFirstHalfStartDate}
                                onChange={handleChange} />
                        </label>

                        <label>
                            --
                            <input
                                type="date"
                                name="winterBreakFirstHalfEndDate"
                                value={childAndSeasonInputInit.winterBreakFirstHalfEndDate}
                                onChange={handleChange} />
                        </label>
                    </>
                )
        } else if (props.parent === "nonCustodialParent") {
            return year % 2 === 0 ?
                (
                    <>
                        <label>
                            Fall Break
                            <input
                                type="date"
                                name="fallBreakStartDate"
                                value={childAndSeasonInputInit.fallBreakStartDate}
                                onChange={handleChange} />
                        </label>

                        <label>
                            --
                            <input
                                type="date"
                                name="fallBreakEndDate"
                                value={childAndSeasonInputInit.fallBreakEndDate}
                                onChange={handleChange} />
                        </label>
                        <br />
                        <label>
                            First Half of Winter Break
                            <input
                                type="date"
                                name="winterBreakFirstHalfStartDate"
                                value={childAndSeasonInputInit.winterBreakFirstHalfStartDate}
                                onChange={handleChange} />
                        </label>

                        <label>
                            --
                            <input
                                type="date"
                                name="winterBreakFirstHalfEndDate"
                                value={childAndSeasonInputInit.winterBreakFirstHalfEndDate}
                                onChange={handleChange} />
                        </label>
                    </>
                )
                :
                (
                    <>
                        <br />
                        <label>
                            Second Half of Winter Break
                            <input
                                type="date"
                                name="winterBreakSecondHalfStartDate"
                                value={childAndSeasonInputInit.winterBreakSecondHalfStartDate}
                                onChange={handleChange} />
                        </label>

                        <label>
                            --
                            <input
                                type="date"
                                name="winterBreakSecondHalfEndDate"
                                value={childAndSeasonInputInit.winterBreakSecondHalfEndDate}
                                onChange={handleChange} />
                        </label>
                        <br />
                        <label>
                            Spring Break
                            <input
                                type="date"
                                name="springBreakStartDate"
                                value={childAndSeasonInputInit.springBreakStartDate}
                                onChange={handleChange} />
                        </label>

                        <label>
                            --
                            <input
                                type="date"
                                name="springBreakEndDate"
                                value={childAndSeasonInputInit.springBreakEndDate}
                                onChange={handleChange} />
                        </label>
                    </>

                )
        }
    }


    const childAndSeasonInputInit = {
        childName: "",
        childBeginningSchoolTime: "07:30",
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

    function handleSubmit(e){
        e.preventDefault()
       props.parent === "custodialParent" ?
        addCustodialParentData(childAndSeasonInput)
       :
       addNonCustodialParentData(childAndSeasonInput);
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
    <form onSubmit={handleSubmit}>
        Child's Name
        <label>
            <input
                type="text"
                value={childAndSeasonInputInit.childName}
                name="childName"
                onChange={handleChange}
            />
        </label>
        <label>
            School Start Time
            <input
                type="time"
                value={childAndSeasonInputInit.childBeginningSchoolTime}
                name="childBeginningSchoolTime"
                max="12:00"
                onChange={handleChange}
            />
        </label>

        <label>
            School End Time
            <input
                type="time"
                value={childAndSeasonInputInit.childEndingSchoolTime}
                name="childEndingSchoolTime"
                max="12:00"
                onChange={handleChange}
            />
        </label>

        <label>
            Your Child's Birthday:
            <input
                type="date"
                name="childBirthday"
                value={childAndSeasonInputInit.childBirthday}
                onChange={handleChange} />
        </label>
        <h3>Seasonal Breaks for the School Year of {year} - {year + 1}</h3>
        {displaySeasonalInputs}
        <br />
        <button>Submit New Child Entry</button>
        </form>
    </>
)


    }