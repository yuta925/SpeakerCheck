import ChartComponent from "..";
import { Box, Center, Flex, Space } from '@mantine/core';

type Props = {
    data: Number[];
  }
    
const ChartList = (props: Props) => {
    const { data } = props;

    return (
        <Flex direction={"column"} align={"center"}>
            <ChartComponent name={ "イントネーション" } score={data[0]} />
            <ChartComponent name={ "スピード" } score={data[1]} />
            <ChartComponent name={ "滑舌" } score={data[2]} />
            <ChartComponent name={ "声の大きさ" } score={data[3]} />
        </Flex>
    )
}

export default ChartList;