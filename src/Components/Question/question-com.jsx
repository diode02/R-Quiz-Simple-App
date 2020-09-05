import React from "react";

const Question = ({ handleOptionChange, question_id, option }) => {
  return (
    <li onChange={handleOptionChange}>
      <input
        type="radio"
        name={"a" + question_id}
        question-id={question_id}
        value={option}
      ></input>
      <span>{option}</span>
    </li>
  );
};

export default Question;
