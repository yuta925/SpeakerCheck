import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { useHooks } from "./model/hooks";

export const Index = () => {
  const { startRecording, stopRecording, isAudio } = useHooks();

  return (
    <>
      <h1>録音サンプル</h1>
      <button type="button" onClick={startRecording} disabled={isAudio}>
        録音スタート
      </button>
      <button type="button" onClick={stopRecording} disabled={!isAudio}>
        録音ストップ
      </button>
    </>
  );
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);
