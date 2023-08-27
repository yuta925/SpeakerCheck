import React from 'react';
import { Text } from "@mantine/core";
import ScoreComponent from "../components/Score"
import ChartList from '../components/Chart/List';
import CharComponent from '../components/Panel';
import ButtonComponent from '../components/Button';

const Result = () => {
    return (
        <>
            <Text>採点結果ページ</Text>
            <ScoreComponent text='100'></ScoreComponent>
            <ChartList data={[10, 10, 25, 20]}></ChartList>
            <CharComponent text={"すてき"}/>
            <ButtonComponent text={"タイトル"} width={"lg"} />
            <ButtonComponent text={"再チャレンジ"} width={"lg"} />
        </>
    );
};

export default Result;
