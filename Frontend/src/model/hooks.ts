import { useEffect, useRef, useState } from "react";

interface ExtractedData {
  [key: string]: string;
}

type Hooks = {
  startRecording: () => void;
  stopRecording: () => void;
  transcript: string;
  response: string;
  isAudio: boolean;
};

const APIKEY = process.env.REACT_APP_OPENAI_API_KEY;
const PROMPT =
  "<>は必ず残してください。{}の中には具体的な採点結果を入れてください。次のプロンプトに関して、以下の評価項目に沿って評価をしてください.また、以下のフィードバックテンプレートは必ず守るようにしてください！[評価項目の説明] 1. intonation・・・イントネーションの変化や調子はどうでしたか？ 2. articulation・・・発音や言葉のはっきりさ、滑舌の良さについてどう思いますか？25点中何点ですか？ 3. speed・・・話し方の速さやペース、一貫性について評価してください。25点中何点ですか？ 4. loudnessOfVoice・・・声の大きさや音量は適切でしたか？25点中何点ですか? [フィードバックテンプレート] <intonation: {点数}>, <articulation: {点数}>, <speed: {点数}>, <loudnessOfVoice: {点数}>, <total:{点数}> （合計得点を100点満点で計算） <AIcomment: {コメント}>（全体的な印象や改善点についてコメントしてください） 下記プロンプトを使用して、各評価項目について25点満点で評価し、最後に全体コメントを提供してください. 結果だけを返してください";

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

  const transeText = (text: string) => {
    const extractedData: Record<string, string> = {};
    const results: ExtractedData[] = [];
    console.log("response text: ", text);
    const regex: RegExp = /<([^<>]+)>/g;
    let match;

    while ((match = regex.exec(text)) !== null) {
      const keyValue = match[1].split(":"); // キーと値を分割
      if (keyValue.length === 2) {
        const key = keyValue[0].trim();
        const value = keyValue[1].trim();
        const obj: ExtractedData = {};
        obj[key] = value;
        results.push(obj);
      }
    }

    console.log("results: ", results);
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
        console.log("response text: ", responseData.text);
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
            { role: "user", content: PROMPT },
            {
              role: "user",
              content: transcript,
            },
          ],
        }),
      });

      const responseData = await result.json();
      if (responseData.choices) {
        setResponse(responseData.choices[0].message.content);
        transeText(responseData.choices[0].message.content);
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
