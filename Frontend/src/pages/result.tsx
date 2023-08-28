import React from "react";
import { Text, Space, Center, Flex } from "@mantine/core";
import ScoreComponent from "../components/Score";
import ChartList from "../components/Chart/List";
import ButtonComponent from "../components/Button";
import { Link } from "react-router-dom";
import AIcommentComponent from "../components/AIcomment";

const Result = () => {
  return (
    <>
      <Space h="xl" />
      <Flex
        mih={50}
        gap="lg"
        justify="center"
        align="center"
        // direction="Row"
        wrap="wrap"
      >
        <ScoreComponent text="100"></ScoreComponent>
        <ChartList data={[10, 10, 25, 20]}></ChartList>
      </Flex>
      <Space h="102px" />
      <Center>
        <AIcommentComponent text={"コメント"} />
      </Center>
      <Space h="42px" />
      <Flex mih={50} gap="lg" justify="center" align="center" wrap="wrap">
        <Link to="/">
          <ButtonComponent text={"タイトル"} width={"lg"} variant="light" />
        </Link>
        <ButtonComponent
          text={"再チャレンジ"}
          width={"lg"}
          variant={"outline"}
        />
      </Flex>
      <Space h="lg" />
    </>
  );
};

export default Result;
