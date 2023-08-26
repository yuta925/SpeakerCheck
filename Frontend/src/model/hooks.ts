import { useEffect, useRef, useState } from "react";

type Hooks = {
  startRecording: () => void;
  stopRecording: () => void;
  transcript: string;
  response: string;
  isAudio: boolean;
};

const APIKEY = process.env.REACT_APP_OPENAI_API_KEY;
const PROMPT =
  "今からいう言葉に関して、以下の評価項目に関してフィードバックをしてください.フィードバック評価項目 1. イントネーション (25点満点)・・・イントネーションの変化や調子はどうでしたか？25点中何点ですか? 2. 発音や言葉のはっきりさ、滑舌 (25点満点)・・・発音や言葉のはっきりさ、滑舌の良さについてどう思いますか？25点中何点ですか？ 3. 話すスピーチ (25点満点)・・・話し方の速さやペース、一貫性について評価してください。25点中何点ですか？ 4. 声の大きさ (25点満点)・・・声の大きさや音量は適切でしたか？25点中何点ですか? 合計得点: （合計得点を100点満点で計算） 全体コメント: （全体的な印象や改善点についてコメントしてください） このプロンプトを使用して、各評価項目について25点満点で評価し、最後に全体コメントを提供してください。出力方法としては<評価項目：点数>(コメント)のように出力してください";

export const useHooks = (): Hooks => {
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isAudio, setIsAudio] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const handleDataAvailable = (event: BlobEvent) => {
    // 音声ファイル生成
    const file = new File([event.data], "audio.mp3", {
      type: event.data.type,
      lastModified: Date.now(),
    });
    setAudioFile(file);
  };

  const startRecording = async () => {
    // 録音開始
    setTranscript("");
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder.current = new MediaRecorder(stream);
    mediaRecorder.current.start();
    mediaRecorder.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    setIsAudio(true);
    console.log("音声開始", mediaRecorder.current?.state);
  };

  const stopRecording = () => {
    // 録音停止
    setResponse("");
    mediaRecorder.current?.stop();
    setIsAudio(false);

    console.log("音声停止：", mediaRecorder.current?.state);
  };

  useEffect(() => {
    const uploadAudio = async () => {
      if (!audioFile) return;
      const endPointOfAudio = "https://api.openai.com/v1/audio/transcriptions";
      const formData = new FormData();

      // fileを指定
      formData.append("file", audioFile, "audio.mp3");
      // modelを指定
      formData.append("model", "whisper-1");
      // languageを指定
      formData.append("language", "ja");

      setIsLoading(true);
      const response = await fetch(endPointOfAudio, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${APIKEY}`,
        },
        body: formData,
      });
      const responseData = await response.json();
      if (responseData.text) {
        // 文字起こしされたテキスト
        setTranscript(responseData.text);
      }
      setAudioFile(null);
      setIsLoading(false);
    };

    const getResponse = async () => {
      if (!transcript) return;
      const endPointOfChat = "https://api.openai.com/v1/chat/completions";

      // apiの設定
      const result = await fetch(endPointOfChat, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${APIKEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: PROMPT,
            },
            {
              role: "user",
              content: transcript,
            },
          ],
        }),
      });

      const responseData = await result.json();
      if (responseData.choices) {
        // 文字起こしされたテキスト
        setResponse(responseData.choices[0].message.content);
      } else {
        setResponse("エラーです");
      }
    };

    uploadAudio();
    getResponse();
  }, [audioFile]);

  return {
    startRecording,
    stopRecording,
    isAudio,
    transcript,
    response,
  };
};
