import React from 'react';
import { Text, Space, Center } from "@mantine/core";
import ScoreComponent from "../components/Score"
import ChartList from '../components/Chart/List';
import CharComponent from '../components/Panel';
import ButtonComponent from '../components/Button';
import { Flex } from "@mantine/core";
import { Link } from "react-router-dom";
import AIcommentComponent from '../components/AIcomment';



const Result = () => {
    return (
        <>
            <Space h="lg" />
            <Flex
            mih={50}
            gap="lg"
            justify="center"
            align="center"
            direction="Row"
            wrap="wrap">
                <ScoreComponent text='100'></ScoreComponent>
                <ChartList data={[10, 10, 25, 20]}></ChartList>
            </Flex>
            <Space h="lg" />
            <Center>
                    <AIcommentComponent style={{ padding: '50px' }}/>
            </Center>
            <Space h="lg" />
            <Flex
            mih={50}
            gap="lg"
            justify="center"
            align="center"
            wrap="wrap"
            >
                <Link to="/">
                <ButtonComponent text={"タイトル"} width={"lg"} />
                </Link>
                <Link to="/practice">
                <ButtonComponent text={"再チャレンジ"} width={"lg"} />
                </Link>
            </Flex>
            <Space h="lg" />
        </>
    );
};

export default Result;
