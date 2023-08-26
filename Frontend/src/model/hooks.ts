import { useEffect, useRef, useState } from "react";
import { isPrivateIdentifier } from "typescript";

type Hooks = {
  startRecording: () => void;
  stopRecording: () => void;
  transcript: string;
  isAudio: boolean;
};

export const useHooks = (): Hooks => {
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isAudio, setIsAudio] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>("");

  // API キーを取得
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  //   const apiKey = "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";

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
    console.log("apiKey", apiKey);
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
      const endPoint = "https://api.openai.com/v1/audio/transcriptions";

      const formData = new FormData();
      console.log("フォーマット");

      // fileを指定
      formData.append("file", audioFile, "audio.mp3");
      // modelを指定
      formData.append("model", "whisper-1");
      // languageを指定
      formData.append("language", "ja");
      // プロンプトを指定
      formData.append("prompt", "今日の天気について話してください。");

      setIsLoading(true);
      console.log("ローディング");
      const response = await fetch(endPoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
        body: formData,
      });
      const responseData = await response.json();

      console.log("レスポンス", responseData);
      if (responseData.text) {
        // 文字起こしされたテキスト
        setTranscript(responseData.text);
      }
      setAudioFile(null);
      setIsLoading(false);
    };
    uploadAudio();
  }, [audioFile]);

  return {
    startRecording,
    stopRecording,
    isAudio,
    transcript,
  };
};
