import React from 'react'

export default function OddHolidays() {
    const oddYears = [
        
                {
                    name: "President's Day",
                    beginningTime: "6:00PM",
                    beginningDay: "Friday before holiday",
                    endingTime: "7:00PM",
                    endingDay: "President's Day" 
                },
                {
                    name: "Memorial Day",
                    beginningTime: "6:00PM",
                    beginningDay: "Friday before holiday",
                    endingTime: "7:00PM",
                    endingDay: "Memorial Day" 
                },
                {
                    name: "Pioneer Day",
                    beginningTime: "6:00PM",
                    beginningDay: "July 23",
                    endingTime: "6:00PM",
                    endingDay: "July 25th" 
                },
                {
                    name: "Columbus Day",
                    beginningTime: "6:00PM",
                    beginningDay: "Day before Columbus Day",
                    endingTime: "7:00PM",
                    endingDay: "Columbus Day" 
                },
                {
                    name: "Halloween",
                    beginningTime: "4:00PM",
                    beginningDay: "October 31st",
                    endingTime: "9:00PM",
                    endingDay: "October 31st" 
                },
                {
                    name: "Thanksgiving",
                    beginningTime: "6:00PM",
                    beginningDay: "Wednesday evening before Thanksgiving",
                    endingTime: "7:00PM",
                    endingDay: "day before school begins" 
                },
                {
                    name: "Winter Break Second Half",
                    beginningTime: "7:00PM",
                    beginningDay: "December 27",
                    endingTime: "7:00PM",
                    endingDay: "day before school begins" 
                },
                {
                    name: "Child's Birthday",
                    beginningTime: "3:00PM",
                    beginningDay: "on child's birthday",
                    endingTime: "9:00PM",
                    endingDay: "on child's date of birth" 
                }    
    ]
    const displayOddYears = oddYears.map(holiday => 
        <> 
            <h3>{holiday.name}:</h3> 
            <h4>{holiday.beginningTime} {holiday.beginningDay} through</h4>
            <h4>{holiday.endingTime} {holiday.endingDay}</h4>
        </>
    )
    return (
        <>
            {displayOddYears}
        </>
    )
}