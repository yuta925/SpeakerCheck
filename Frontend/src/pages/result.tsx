import React from "react";
import { Text, Space, Center, Flex } from "@mantine/core";
import ScoreComponent from "../components/Score";
import ChartList from "../components/Chart/List";
import ButtonComponent from "../components/Button";
import { Link } from "react-router-dom";
import AIcommentComponent from "../components/AIcomment";
import { useHooks } from "../model/hooks";

const Result = () => {
  const { startRecording, stopRecording, isAudio, response, score } =
    useHooks();
  // const scoreData = [
  //   parseInt(score[0].intonation),
  //   parseInt(score[2].speed),
  //   parseInt(score[1].articulation),
  //   parseInt(score[3].loudnessOfVoice),
  // ];
  const scoreData = [21, 14, 20, 11];
  // const totalScore = parseInt(score[4].total);
  const totalScore = 46;
  // const comment = score[5].AIcomment;
  const comment =
    "発音は非常にはっきりとしており、滑舌も良かったです。イントネーションには少し変化が欲しかったですが、全体的には非常に良いパフォーマンスでした。声の大きさや速さも適切でした。改善点としては、もう少しイントネーションの変化を取り入れることで表現力がアップすると思います。";

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
