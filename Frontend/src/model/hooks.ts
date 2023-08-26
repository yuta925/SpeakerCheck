import { useEffect, useRef, useState } from "react";

type Hooks = {
  startRecording: () => void;
  stopRecording: () => void;
  transcript: string;
  response: string;
  isAudio: boolean;
};

const APIKEY = process.env.REACT_APP_OPENAI_API_KEY;

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
          max_tokens: 100,
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content:
                "今からいう言葉に関して、イントネーションや滑舌の良し悪しについてフィードバックをしてください",
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
