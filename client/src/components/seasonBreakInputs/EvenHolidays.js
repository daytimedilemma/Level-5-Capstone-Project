import React from 'react'

export default function EvenHolidays() {

    //const displayEvenYears = evenYears.map(holiday => {
      //  console.log(holiday)
     //   return (
    //        <h1>{holiday.name}</h1>
    //    )
   //})
    const evenYears = [
        
             {
                    name: "Dr. Martin Luther King Jr. Day",
                    beginningTime: "6:00PM",
                    beginningDay: "Friday before holiday",
                    endingTime: "7:00PM",
                    endingDay: "Martin Luther King Jr. Day"
                },
                {
                    name: "Spring Break",
                    beginningTime: "6:00PM",
                    beginningDay: "day school dismisses",
                    endingTime: "7:00PM",
                    endingDay: "day before school begins"
                },
                {
                    name: "Independence Day",
                    beginningTime: "6:00PM",
                    beginningDay: "July 3",
                    endingTime: "6:00PM",
                    endingDay: "July 5th"
                },
                {
                    name: "Labor Day",
                    beginningTime: "6 PM",
                    beginningDay: "Friday before Labor Day",
                    endingTime: "7:00PM",
                    endingDay: "Labor Day"
                },
                {
                    name: "Fall Break",
                    beginningTime: "6:00PM",
                    beginningDay: "day school dismisses",
                    endingTime: "7:00PM",
                    endingDay: "day before school begins"
                },
                {
                    name: "Veterans Day",
                    beginningTime: "6:00PM",
                    beginningDay: "day before Veterans Day",
                    endingTime: "7:00PM ",
                    endingDay: "Veterans Day"
                },
                {
                    name: "Winter Break (First Half)",
                    beginningTime: "6:00PM", 
                    beginningDay: "day school is dismissed",
                    endingTime: "7:00PM ",
                    endingDay: "December 27" 
                },
                {
                    name: "Day before or after Child's Birthday",
                    beginningTime: "3:00PM",
                    beginningDay: "day chosen", //Child's Birthday input
                    endingTime: "9:00PM ",
                    endingDay: "chosen day" //Child's Birthday input
                }   
    ]
    const displayEvenYears = evenYears.map(holiday => 
        <> 
            <h3 className='holiday-name'>{holiday.name}:</h3> 
            <h4>{holiday.beginningTime} {holiday.beginningDay}, through</h4>
            <h4>{holiday.endingTime} {holiday.endingDay}</h4>
        </>
    )
    return (
        <>
            {displayEvenYears}
        </>
    )
}