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
  const scoreData = [
    parseInt(score[0].intonation),
    parseInt(score[2].speed),
    parseInt(score[1].articulation),
    parseInt(score[3].loudnessOfVoice),
  ];
  const totalScore = parseInt(score[4].total);
  const comment = score[5].AIcomment;

  console.log("response", score[0].intonation);
  return (
    <>
      <Space h="xl" />
      <Flex mih={50} gap="lg" justify="center" align="center" wrap="wrap">
        <>
          <ScoreComponent text={totalScore.toString()}></ScoreComponent>
          <ChartList data={scoreData}></ChartList>
        </>
        ;{/* })} */}
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
      <button type="button" onClick={startRecording} disabled={isAudio}>
        録音スタート
      </button>
      <button type="button" onClick={stopRecording} disabled={!isAudio}>
        録音ストップ
      </button>
    </>
  );
};

export default Result;
