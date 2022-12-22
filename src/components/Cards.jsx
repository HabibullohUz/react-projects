import React from "react";

function Cards(props) {
  return (
    <div className="card">
      <h1>Student name: {props.student.name}</h1>
      <h2>Student surname: {props.student.surname}</h2>
      <h2>Student age: {props.student.age}</h2>
      <img
        src="https://assets4.lottiefiles.com/packages/lf20_v3l4ck1t.json"
        alt=""
      />
    </div>
  );
}

export default Cards;
