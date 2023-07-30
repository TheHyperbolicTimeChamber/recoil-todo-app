import { useRecoilValue } from "recoil";
import { addTitleState, addTitleStateLength } from "../states/addTitleState";
import { Logger, ILogObj } from "tslog";
import { List, Divider, Typography } from "antd";

const AddTask = () => {
  const addTitle = useRecoilValue(addTitleState);
  const addTitleLength = useRecoilValue(addTitleStateLength);
  const log: Logger<ILogObj> = new Logger();
  log.info(addTitle);

  return (
    <div className="taskField">
      <Divider orientation="left" style={{ color: "white" }}>
        There is {addTitleLength} tasks.
      </Divider>
      <List
        bordered
        style={{ color: "white" }}
        dataSource={addTitle}
        renderItem={(item) => (
          <List.Item style={{ color: "white" }}>{item.title}</List.Item>
        )}
      ></List>
    </div>
  );
};

export default AddTask;
