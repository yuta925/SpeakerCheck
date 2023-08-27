import React from 'react';
import { Text } from "@mantine/core";
import ScoreComponent from "../components/Score"

const Result = () => {
    return (
        <div>
            <Text>採点結果ページ</Text>
            <ScoreComponent text='100'></ScoreComponent>
        </div>
    );
};

export default Result;
