import React, { useState } from "react"
import axios from "axios"

const UseContext = React.createContext()

function UseContextProvider(props) {
    const [fallBreak, setFallBreak] = useState({
        seasonalBreakName: "Fall",
        startDate: "",
        endDate: ""
    })

    const [winterBreakFirstHalf, setWinterBreakFirstHalf] = useState({
        seasonalBreakName: "First Half Of Winter",
        startDate: "",
        endDate: ""
    })

    const [winterBreakSecondHalf, setWinterBreakSecondHalf] = useState({
        seasonalBreakName: "Second Half Of Winter",
        startDate: "",
        endDate: ""
    })

    const [springBreak, setSpringBreak] = useState({
        seasonalBreakName: "Spring",
        startDate: "",
        endDate: ""
    })

  
    function seasonalInputs(timeOff, setTimeoff) {
        function handleChange(e){
            const { name, value } = e.target
            setTimeoff(prevTimeOff => {
                return {
                    ...prevTimeOff,
                    [name]: value
                };
            });
        }
        return (
            <>
                <br/>
                <label>
                    {`${timeOff.seasonalBreakName} Break`} 
                    
                    <input
                        value={timeOff.startDate}
                        name="startDate"
                        onChange={handleChange}
                        type="date"
                    />
                </label>
                <label>
                   -- 
                    <input
                        value={timeOff.endDate}
                        name="endDate"
                        onChange={handleChange}
                        type="date"
                    />
                </label>
            </>
        )
    }

    function getParentData(parentPath, setParentData){
        axios.get(`/${parentPath}`)
        .then(res =>{
            setParentData(res.data[0])
        })
        .catch(err => console.log(err))
    }

    const date = new Date
    const year = date.getFullYear()
    // function displayParentData(parentData){
    //     const {
    //         child,
    //         winterBreakFirstHalf, 
    //         winterBreakSecondHalf,
    //         fallBreak,
    //         springBreak,
    //         _id
    //         } = parentData
    //         return (
    //             <div>
    //                 <h3>{child.name}</h3>
    //             </div>
    //         )
    // }


    return (
        <UseContext.Provider value={{
            fallBreak,
            setFallBreak,
            seasonalInputs,
            winterBreakFirstHalf,
            setWinterBreakFirstHalf,
            winterBreakSecondHalf,
            setWinterBreakSecondHalf,
            springBreak, 
            setSpringBreak,
            getParentData,
            // displayParentData
        }}>
            {props.children}
        </UseContext.Provider>
    )
}

export {UseContext, UseContextProvider}