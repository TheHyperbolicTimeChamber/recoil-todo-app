import React from "react";
import { useRecoilValue } from "recoil";
import { addTitleState, addTitleStateLength } from "../states/addTitleState";

const AddTask = () => {
  const addTitle = useRecoilValue(addTitleState);
  const addTitleLength = useRecoilValue(addTitleStateLength);
  return (
    <div className="taskField">
      <div> There is {addTitleLength} tasks.</div>
      <ul>
        {addTitle.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
        <li>first task.</li>
      </ul>
    </div>
  );
};

export default AddTask;
