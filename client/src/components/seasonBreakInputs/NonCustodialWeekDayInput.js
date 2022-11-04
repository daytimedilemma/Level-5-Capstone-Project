import React, { useState } from "react"

export default function NonCustodialWeekDayInput() {
    const [checked, setChecked] = useState(false)

    const [nonCustodialWeekDayInput, setNonCustodialWeekDayInput] = useState({
        startTime: "",
        endTime: "",
        dayOfWeek: ""
    })

    function handleCheckedChange(){
        setChecked(!checked)
    }

       
    function handleChange(e) {
        console.log(e)
        const {name, value, type, checked} = e.target
        setNonCustodialWeekDayInput(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const weekdayOptions = [
        {
            label: "Monday",
            value: "monday"
        },
        {
            label: "Tuesday",
            value: "tuesday"
        },
        {
            label: "Wednesday",
            value: "wednesday"
        },
        {
            label: "Thursday",
            value: "thursday"
        },
    ]

    const displayOptions = weekdayOptions.map(weekdayOption => {
        return (
            <>
                <option value={weekdayOption.value}>{weekdayOption.label}</option>
            </>
        )
    })
    return (
        <>
          
            {
               checked ?
                    <>
                          <label>
                            Noncustodial Parent Week Day Submission
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={handleCheckedChange}
                            />
                        </label>
                        <label>
                            What Day of the Week
                            <select 
                            value={nonCustodialWeekDayInput.dayOfWeek}
                            name="dayOfWeek"
                            onChange={handleChange}
                            >
                                {displayOptions}
                            </select> 
                        </label>
                    
                        <label>
                            <input 
                            value={nonCustodialWeekDayInput.startTime}
                            name="startTime"
                            onChange={handleChange}
                            type="time"
                            />
                        </label>
                        <label>
                            <input 
                            value={nonCustodialWeekDayInput.endTime}
                            name="endTime"
                            onChange={handleChange}
                            type="time"
                            />
                        </label>
                    </>
                    :
                    <>
                    <label>
                        Weekly Evening Visit with the Noncustodial Parent?
                        <input
                            type="checkbox"
                            checked={checked}
                            onChange={handleCheckedChange}
                        />
                    </label>
                </>



            }
        </>
    )
}