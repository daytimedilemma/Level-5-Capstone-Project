import React, { useState, useContext } from "react";
import { UseContext } from "../InputContext"
import "../style.css"

export default function ChildForm() {
  const {
    fallBreak,
    winterBreakFirstHalf,
    winterBreakSecondHalf,
    springBreak
  } = useContext(UseContext)


  const [child, setChild] = useState({
    name: "",
    beginningSchoolTime: "",
    endingSchoolTime: "",
    birthday: ""
  });




  function handleChildChange(e) {
    const { name, value } = e.target;
    setChild((prevChild) => {
      return {
        ...prevChild,
        [name]: value
      };
    });
  }

  
  console.log (child.name)
  return (
    <div className="form-part">
      <label>
        Child's Name
        <input
          type="text"
          value={child.name}
          name="name"
          onChange={handleChildChange}
        />
      </label>
      <label>
        School Start Time
        <input
          type="time"
          value={child.beginningSchoolTime}
          name="beginningSchoolTime"
          max=""
          onChange={handleChildChange}
        />
      </label>
      
      <label>
        School End Time
        <input
          type="time"
          value={child.endingSchoolTime}
          name="endingSchoolTime"
          max=""
          onChange={handleChildChange}
        />
      </label>
      <label>
        Your Child's Birthday:
        <input
          type="date"
          name="birthday"
          value={child.birthday}
          onChange={handleChildChange} />
      </label>
    </div>
  );
}