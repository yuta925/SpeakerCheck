import ButtonComponent from "../components/Button";
import { Link } from "react-router-dom";
import { Space, Text, Container } from "@mantine/core";


function Home() {
  return (
    <>
      <Text size={80}>ユースピカ</Text>
      <Space h={180}></Space>
      <Link to="/create">
        <ButtonComponent text={"原稿を作成する"} />
      </Link>
      <Space h="lg" />
      <Link to="/select">
        <ButtonComponent text={"採点開始"} />
      </Link>
      <Space h="lg" />
      <Link to="/practice">
        <ButtonComponent text={"練習する"} />
      </Link>
    </>
  );
}

export default Home;
