import React, { useState } from "react";
import { Text, Space, Center, Flex } from "@mantine/core";
import ScoreComponent from "../components/Score";
import ChartList from "../components/Chart/List";
import ButtonComponent from "../components/Button";
import { Link, useLocation } from "react-router-dom";
import AIcommentComponent from "../components/AIcomment";
import { useHooks } from "../model/hooks";

interface ExtractedData {
  [key: string]: string;
}

const Result = () => {
  const { state } = useLocation();
  const scoreData = [
    parseInt(state[0].intonation),
    parseInt(state[2].speed),
    parseInt(state[1].articulation),
    parseInt(state[3].loudnessOfVoice),
  ];
  // const scoreData = [21, 21, 21, 21];
  const totalScore = parseInt(state[4].total);
  // const totalScore = 84;
  const comment = state[5].AIcomment;
  // const comment = "score[5].AIcomment";

  console.log("response", state[0]);
  return (
    <>
      <Space h="xl" />
      <Flex mih={50} gap="lg" justify="center" align="center" wrap="wrap">
        <>
          <ScoreComponent text={totalScore.toString()}></ScoreComponent>
          <ChartList data={scoreData}></ChartList>
        </>
      </Flex>
      <Space h="102px" />
      <Center>
        <AIcommentComponent text={comment} />
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
