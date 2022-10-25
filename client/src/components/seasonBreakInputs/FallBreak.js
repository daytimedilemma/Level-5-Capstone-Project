import React, { useState } from "react"

export default function FallBreak() {
   
    const [fallBreak, setFallBreak] = useState({
        fallStartDate: "",
        fallEndDate: ""
    })

    function handleChange(e) {
        const { name, value } = e.target
        setFallBreak(prevSeasonalBreaks => {
            return {
                ...prevSeasonalBreaks,
                [name]: value
            };
        });
    }
    
    return (
        <>
            <br />

            <label>
                Fall Break
                <input
                    value={fallBreak.fallStartDate}
                    name="fallStartDate"
                    onChange={handleChange}
                    type="date"
                />
            </label>

            <label>
                --
                <input
                    value={fallBreak.fallEndDate}
                    name="fallEndDate"
                    onChange={handleChange}
                    type="date"
                />
            </label>
        </>
    )
}