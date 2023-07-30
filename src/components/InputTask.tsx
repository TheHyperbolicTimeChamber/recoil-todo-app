import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { inputTitleState } from "../states/inputTitleState";
import { addTitleState } from "../states/addTitleState";
import { Button, Space, Input } from "antd";
import { FileDoneOutlined, UserOutlined } from "@ant-design/icons";

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
      <Space.Compact style={{ width: "100%" }}>
        <Input
          size="large"
          type="text"
          className="inputTitle"
          onChange={onChange}
          value={inputTitle}
          prefix={<FileDoneOutlined />}
        />
        <Button
          size="large"
          type="primary"
          className="addButton"
          onClick={handleClick}
          disabled={inputTitle === ""}
        >
          Add
        </Button>
      </Space.Compact>
    </div>
  );
};

export default InputTask;
