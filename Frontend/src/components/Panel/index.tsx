import React from "react";
import { Text, Flex, Modal } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import Button from "../Button"
import { Link } from "react-router-dom";

type Props = {
  text: string;
};

const CharComponent = (props: Props) => {
  const { text } = props;
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="h-[350px] w-[650px] relative py-16 px-14 bg-white">
      <Flex gap="20px" text-center >
        <div className="my-2">
          <Text color="#7C7E83" size="16px" className="font-bold mr-28">
            前回の点数
          </Text>
          <Flex align="center" className="ml-2">
            <Text size="64px">100</Text>
            <Text size="32px" className="mt-8">点</Text>
          </Flex>
        
        </div>
        <Text size="32px" className=" w-30 h-20 text-left line-clamp-5  ">
          {text}
        </Text>
      </Flex>
      <Text size="40px">タイトルaaaaaaaaaaaaaaa</Text>
      <div>
          <Button text={"この原稿にする"} width={"base"} onClick={open}></Button>
        </div>
      <Modal opened={opened} onClose={close} size="auto" title="こちらの原稿でよろしいですか？">
        <Flex gap={32}>
          <Link to="/scoring">
            <Button text={"はい"} width={"base"} ></Button>
          </Link>
        </Flex>
      </Modal>
    </div>
  );
};

export default CharComponent;
