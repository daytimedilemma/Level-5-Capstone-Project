import React, { useState, useContext } from "react";
import { UseContext } from "../InputContext"

export default function ChildForm() {
  const {
    fallBreak,
    winterBreakFirstHalf,
    winterBreakSecondHalf,
    springBreak
  } = useContext(UseContext)


  const [child, setChild] = useState({
    name: "",
    beginningSchoolTime: "07:30",
    endingSchoolTime: "03:00",
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
    <>
      Child's Name
      <label>
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
          max="12:00"
          onChange={handleChildChange}
        />
      </label>
      <label>
        School End Time
        <input
          type="time"
          value={child.endingSchoolTime}
          name="endingSchoolTime"
          max="12:00"
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
    </>
  );
}