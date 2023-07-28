import React from "react";
import { useRecoilValue } from "recoil";
import { addTitleState, addTitleStateLength } from "../states/addTitleState";
import { Logger, ILogObj } from "tslog";

const AddTask = () => {
  const addTitle = useRecoilValue(addTitleState);
  const addTitleLength = useRecoilValue(addTitleStateLength);
  const log: Logger<ILogObj> = new Logger();
  log.info(addTitle);

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
