import React from "react";
import { Text, Flex, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Button from "../Button";
import { Link } from "react-router-dom";
import ButtonComponent from "../Button";

type Props = {
  date: string;
  isDraft: boolean;
  title: string;
  text: string;
};

const CharComponent = (props: Props) => {
  const { date, isDraft,title, text } = props;
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="py-4 px-4 rounded-md bg-gray-50 text-left w-80">
      <Text size={"lg"} weight="bold">{title}</Text>
      <div className="my-2 flex items-center gap-4">
        <Text color="#7C7E83" size="xs" className="font-bold">
          {date.toString()}
        </Text>
      </div>
      <div className="my-2 flex items-center gap-4">
        <Text color="#7C7E83" size="xs" className="font-bold">
          最高点数
        </Text>
        <Text size={"md"} weight="bold">100点</Text>
      </div>
      <Text color="#7C7E83" size="xs" className="line-clamp-4 truncate w-full">
        {text}
      </Text>

      <div className="flex items-center justify-center mt-4">
          <Button text={"この原稿にする"} size="sm" onClick={open} />
      </div>

      <Modal centered opened={opened} onClose={close} size="auto" title="こちらの原稿でよろしいですか？">
        <div className="flex justify-center items-center">
          <Link to="/scoring">
            <Button text={"決定"} size="md"/>
          </Link>
        </div>
      </Modal>
    </div>
  );
};

export default CharComponent;
