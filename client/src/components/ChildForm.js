import React, { useState } from "react";

export default function ChildForm() {
  const [child, setChild] = useState({
    name: "",
    beginningSchoolTime: "07:30",
    endingSchoolTime: "03:00",
    birthday: ""

  });

  function handleChange(e) {
    const { name, value } = e.target;
    setChild((prevChild) => {
      return {
        ...prevChild,
        [name]: value
      };
    });
  }
  
  return (
    <>
      Child's Name
      <label>
        <input
          type="text"
          value={child.name}
          name="name"
          onChange={handleChange}
        />
      </label>
      <label>
        School Start Time
        <input
          type="time"
          value={child.beginningSchoolTime}
          name="beginningSchoolTime"
          max="12:00"
          onChange={handleChange}
        />
      </label>
      <label>
        School End Time
        <input
          type="time"
          value={child.endingSchoolTime}
          name="endingSchoolTime"
          max="12:00"
          onChange={handleChange}
        />
      </label>
      <label>
        Your Child's Birthday:
        <input
          type="date"
          name="birthday"
          value={child.birthday}
          onChange={handleChange} />
      </label>
    </>
  );
}