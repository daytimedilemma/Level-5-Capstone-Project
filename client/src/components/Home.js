import React from "react"
import calendarpreview from "./calendarpreview.png"

function Home(){
   return (
   <div>
         <h1 className="welcome">Welcome to the Custody Calendar!</h1>

         <p>Here you will find an easy and seamless way to upload your parent time schedule with the most important people in your life in a couple easy steps! This calendar app will lessen your time spent on scheduling! Check out a sample below. </p>

         <div> Instructions:
         <ol>
            <li>Find your availability. </li>
            <li>Add it to the time inpurt form. </li>
            <li>Watch your calendar colors change! </li>
         </ol>
         </div>
         {/* this image will change once we have the calendar finished */}
         <img src={calendarpreview}></img>

   </div>
   
   )
}

export default Home