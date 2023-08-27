import React from "react";
import Button from "../components/Button";
import { Space } from "@mantine/core";

const Create = () => {
  return (
    <div>
      <div>
        <Button text={"下書き保存"} width={"base"}></Button>
        <Space w="md"></Space>
        <Button text={"登録"} width={"base"}></Button>
      </div>
    </div>
  );
};

export default Create;
