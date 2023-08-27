import React from "react";
import ButtonComponent from "../components/Button";
import { Link } from "react-router-dom";
import { Text, Space } from "@mantine/core";

function Home() {
  return (
    <>
      <p style={{ fontSize: "80px" }}>ユースピカ（仮）</p>

      <Link to="/create">
        <ButtonComponent text={"原稿を作成する"} width={"lg"} />
      </Link>
      <br></br>
      <Space h="lg" />
      <Link to="/select">
        <ButtonComponent text={"採点開始"} width={"lg"} />
      </Link>
      <br></br>
      <Space h="lg" />
      <Link to="/practice">
        <ButtonComponent text={"練習する"} width={"lg"} />
      </Link>
      <br></br>
    </>
  );
}

export default Home;
