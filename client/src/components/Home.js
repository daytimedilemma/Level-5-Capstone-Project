import React from "react"
import calendarpreview from "./calendarpreview.png"

function Home(){
   return (
   <div>
         <div>Welcome to the Custody Calendar!</div>

         <p>Here you will find an easy and seamless way to upload all your availability to schedule time with the most important person/persons in your life in a couple easy steps! This calendar app will give you a quick glimpse to lessen your time with scheduling, check out a sample below. </p>

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