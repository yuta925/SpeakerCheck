import React from "react";
import { Text, Flex } from "@mantine/core";

type Props = {
  text: string;
};

const CharComponent = (props: Props) => {
  const { text } = props;

  return (
    <div className="h-[350px] w-[650px] relative py-16 px-14 bg-white">
      <Flex gap="40px" text-center >
        <div className="my-2">
          <Text color="#7C7E83" size="16px" className="font-bold">
            前回の点数
          </Text>
          <Flex align="center">
            <Text size="64px">100</Text>
            <Text size="32px">点</Text>
          </Flex>
          <Text size="40px">タイトル</Text>
        </div>
        <Text size="32px" className=" w-30 h-60 text-left line-clamp-5  ">
          {text}
        </Text>
      </Flex>
    </div>
  );
};

export default CharComponent;
