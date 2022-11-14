// import React, { useEffect, useContext } from 'react'
// import { UseContext } from '../InputContext'

// export default function Calendar() {

//     const { calendar, getCalendar } = useContext(UseContext)

//     useEffect(() => {
//         getCalendar()
//         console.log("useEffect")
//     }, [])

//     console.log(calendar)

    //const showSummary = calendar[0]

    //const summary = showSummary.map((item, index) => {
     //  return (<h1 key={index}>{item.summary}</h1>)
    //})
    
    
         //const summary = calendar[0].map(item => {
      // return (<h1>{item.summary}</h1>)
   //})

//     return (
//         <>
//             <div>
//              {calendar.map((item, index, date) => {
//                 return (
//                     <>
//                         <div>
//                             <h1 key={index}>{item.summary} {date.toLocaleDateString()}</h1>
//                             <p></p>
//                         </div> 
                        
//                         <div>
//                         </div>
//                     </>  
//                 )
//              })}
//             </div>
//         </>
//     )
// }