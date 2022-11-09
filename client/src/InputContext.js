import React, { useState } from "react"
import axios from "axios"

const UseContext = React.createContext()
//Season Inputs Information
function UseContextProvider(props) {

    //Get All request for data

    const [custodialParentData, setCustodialParentData] = useState([])
    const [nonCustodialParentData, setNonCustodialParentData] = useState([])
    const [summerList, setSummerList] = useState([])
    const[childAndSeasonList, setChildAndSeasonList] = useState([])
    const [calendar, setCalendar] = useState([])

    const API_KEY = `AIzaSyCSM5CLpacQnfpw0qJMxGigpjh5LE7rGuc`

    function getCalendar() {
        axios.get(`https://www.googleapis.com/calendar/v3/calendars/en.usa%23holiday@group.v.calendar.google.com/events?key=${API_KEY}`)
            .then(res => {setCalendar(res.data)
            console.log(res.data)}
            )
            .catch(err => console.log(err))
    }
    
    function getParentData(parentPath, setParentData) {
        axios.get(`/${parentPath}`)
            .then(res => {
                const data = res.data.map(mappedArray => {
                    setParentData(preParentData => {
                        return ([...preParentData, mappedArray])
                    })
                })
            })
            .catch(err => console.log(err))
    }

    

    //Post Request for a single input
    //***Take away one of the parent routes to just one???***
     //Form Submission

    function addNonCustodialParentData(newData){
        axios.post(`/nonCustodial`, newData)
        .then(res => {
            setNonCustodialParentData(prevParentData => [...prevParentData, res.data])
        })
        .catch(err => console.log(err)) 
    }
    
    function addCustodialParentData(newData){
        axios.post(`/custodialParent`, newData)
            .then(res => {
                setCustodialParentData(prevParentData => [...prevParentData, res.data])
            })
            .catch(err => console.log(err))
    }

    
    const custodialHolidays = [
        {
            eventHolidays: {
                drMartinLutherKing: {
                    //Need to add arguement for Friday schedule
                    name: "Dr. Martin Luther King Jr. Day",
                    beginningTime: "6:00PM",
                    beginningDay: "Friday",//Retrieve Holiday date
                    endingTime: "7:00",
                    endingDay: "Martin Luther King Day"
                },

                springBreak: {
                    name: "Spring Break",
                    beginningTime: "6:00PM",
                    beginningDay: "Day school dismisses",//Retrieve Spring Break dates
                    endingTime: "7:00PM day before school begins ",
                    endingDay: "Day before school begins" //Retrieve Spring Break dates, user input
                },

                independenceDay: {
                    name: "Independence Day",
                    beginningTime: "6:00PM",
                    beginningDay: "July 3",
                    endingTime: "6:00PM",
                    endingDay: "July 5th"
                },

                laborDay: {
                    name: "Labor Day",
                    beginningTime: "6 PM", // Determine if child has school the Friday before 9 am if not, after school or 6pm if there is
                    beginningDay: "Friday before Labor Day",
                    endingTime: "7:00PM",
                    endingDay: "Labor Day, day before school resumes"
                },

                fallBreak: {
                    name: "Spring Break",
                    beginningTime: "6:00PM",
                    beginningDay: "Day school dismisses",//Retrieve Fall Break dates
                    endingTime: "7:00PM",
                    endingDay: "Day before school begins" //Retrieve Fall Break dates, user input
                },

                veteransDay: {
                    name: "Veterans Day",
                    beginningTime: "6:00PM",
                    beginningDay: "Day before Veterans Day",
                    endingTime: "7:00PM ",
                    endingDay: "Veterans Day"
                },

                winterBreakFirstHalf: {
                    name: "Winter Break (First Half)",
                    beginningTime: "6:00PM", // Or the time is school is dismissed
                    beginningDay: "Day School is dismissed ",//Retrieve Spring Break dates
                    endingTime: "7:00PM ",
                    endingDay: "Veterans Day" //Retrieve Spring Break dates, user input
                },

                dayBeforeOrAfterChildBirthday: {
                    name: "Day before or after Child's Birthday",
                    beginningTime: "3:00PM",
                    beginningDay: "Day before or after Child's Birthday", //Child's Birthday input
                    endingTime: "9:00PM ",
                    endingDay: "Day before or after Child's Birthday" //Child's Birthday input
                }
            }
        },

        {
            oddHolidays: {
                presidentsDay: {
                    name: "President's Day",
                    beginningTime: "6:00PM",
                    beginningDay: "Friday before President's Day",//Retrieve Holiday date
                    endingTime: "7:00PM",
                    endingDay: "President's Day"
                },

                memorialDay: {
                    name: "Memorial Day",
                    beginningTime: "6:00PM", // If not school on friday 9:00Am if school is in session end of school or 6
                    beginningDay: "Friday before Memorial's Day",//Retrieve Holiday date
                    endingTime: "7:00PM",
                    endingDay: "Memorial Day"
                },

                pioneerDay: {
                    name: "Pioneer Day",
                    beginningTime: "6:00 PM",
                    beginningDay: "July 23",//Retrieve Holiday date
                    endingTime: "6:00PM",
                    endingDay: "July 25"
                },

                columbusDay: {
                    name: "Columbus Day",
                    beginningTime: "6:00PM",
                    beginningDay: "Day before Columbus Day",
                    endingTime: "7:00PM ",
                    endingDay: "Columbus Day"
                },

                halloween: {
                    name: "Halloween",
                    beginningTime: "Time school is dismissed or 4:00PM",
                    beginningDay: "October 31 or day Halloween is celebrated in community",
                    endingTime: "9:00PM ",
                    endingDay: "October 31 or day Halloween is celebrated in community"
                },

                thanksgiving: {
                    name: "Thanksgiving",
                    beginningTime: "6:00PM", // or time school is dimsised
                    beginningDay: "Day before Thanksgiving",
                    endingTime: "7:00PM",
                    endingDay: "Day before school resumes"
                },

                winterBreakSecondHalf: {
                    name: "Winter Break (Second Half)",
                    beginningTime: "6:00PM", // or time school is dimsised
                    beginningDay: "December 7",
                    endingTime: "7:00PM",
                    endingDay: "Day before school resumes"
                },

                dayOfChildsBirthday: {
                    name: "Day of Child's Birthday",
                    beginningTime: "3:00PM",
                    beginningDay: "Child's Birthday", //Child's Birthday input
                    endingTime: "9:00PM ",
                    endingDay: "Child's Birthday" //Child's Birthday input
                }
            }
        }
    ]

    const date = new Date()
    const year = date.getFullYear()
    


    return (
        <UseContext.Provider value={{
            getParentData,
            custodialHolidays,
            year,
            custodialParentData,
            setCustodialParentData,
            nonCustodialParentData,
            setNonCustodialParentData,
            addNonCustodialParentData,
            addCustodialParentData,
            summerList,
            setSummerList,
            childAndSeasonList,
            setChildAndSeasonList
        }}>
            {props.children}
        </UseContext.Provider>
    )
}

export { UseContext, UseContextProvider }