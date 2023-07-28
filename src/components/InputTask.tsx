import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { inputTitleState } from "../states/inputTitleState";
import { addTitleState } from "../states/addTitleState";
import { Button, Space, Input } from "antd";

const getKey = () => Math.random().toString(32).substring(2);

const InputTask = () => {
  // const inputTitle = useRecoilValue(inputTitleState);
  // const setInputTitle = useSetRecoilState(inputTitleState);
  // 以下のようにuseRecoilStateでまとめて書ける
  const [inputTitle, setInputTitle] = useRecoilState(inputTitleState);
  const [addTitle, setAddTitle] = useRecoilState(addTitleState);
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputTitle(e.target.value);
      console.log(e.target.value);
    },
    [inputTitle]
  );
  const handleClick = () => {
    console.log(getKey());
    setAddTitle([...addTitle, { id: getKey(), title: inputTitle }]);
    setInputTitle("");
  };
  return (
    <div className="inputField">
      <Space>
        <Input
          type="text"
          className="inputTitle"
          onChange={onChange}
          value={inputTitle}
        />
        <Button
          type="primary"
          className="addButton"
          onClick={handleClick}
          disabled={inputTitle === ""}
        >
          Add
        </Button>
      </Space>
    </div>
  );
};

export default InputTask;
