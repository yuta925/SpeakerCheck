import { BackgroundImage } from "@mantine/core";
import { Text, Paper, Title, Box } from "@mantine/core";
import table from "../image/机.jpeg";
import ButtonComponent from "../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHooks } from "../model/hooks";

const Result = () => {
  const { startRecording, stopRecording, response, score } = useHooks();
  const [isRecording, setisRecording] = useState<boolean>(false);

    if (isRecording) {
      console.log("score:", score[0])
      stopRecording();
    } else {
      startRecording();
    }
    setisRecording(!isRecording);
  };

  return (
    <Box mx="auto">
      <BackgroundImage
        src={table}
        radius="xs"
        sx={{
          backgroundSize: "cover",
        }}
        px={20}
        mih={"100vh"}
      >
        <div className="mb-4">
          <Title order={2}>原稿</Title>
        </div>
        <div className="mt-48s">
          <Paper shadow="xs" radius="xs" p="xl" withBorder w-1240>
            <Text size={28} align="left">
              吾輩は猫である。名前はまだ無い。
            </Text>
            <Text size={28} align="left">
              どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
            </Text>
            <Text size={28} align="left">
              吾輩は猫である　夏目漱石
            </Text>
          </Paper>
        </div>
        <div className="flex flex-row mt-24 justify-center">
          {isRecording ? (
            <>
              <ButtonComponent
                text={"停止"}
                width={"base"}
                variant={"default"}
                onClick={handleClick}
              ></ButtonComponent>
            </>
          ) : (
            <>
              <ButtonComponent
                text={"録音"}
                width={"base"}
                variant={"default"}
                onClick={handleClick}
              ></ButtonComponent>
            </>
          )}
        </div>
        <div className="mt-4">
          <Link to="/result" state={{ state: score }}>
            <ButtonComponent
              text={"採点する"}
              width={"base"}
              variant={"filled"}
            ></ButtonComponent>
          </Link>
        </div>
      </BackgroundImage>
    </Box>
  );
};

export default Result;
