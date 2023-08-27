import ButtonComponent from "../components/Button";
import { Link } from "react-router-dom";
import { Space, Text, Container } from "@mantine/core";


function Home() {
  return (
    <>
      <Text size={80}>ユースピカ</Text>
      <Space h={180}></Space>
      <Link to="/create">
        <ButtonComponent text={"原稿を作成する"} width={"lg"} />
      </Link>
      <Space h="lg" />
      <Link to="/select">
        <ButtonComponent text={"採点開始"} width={"lg"} />
      </Link>
      <Space h="lg" />
      <Link to="/practice">
        <ButtonComponent text={"練習する"} width={"lg"} />
      </Link>
    </>
  );
}

export default Home;
