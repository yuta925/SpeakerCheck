import ChartComponent from ".";
import { Box, Center, Flex, Space } from '@mantine/core';

type ChartData={
    text: string;
    score: number;
}

type Props = {
    data: ChartData[];
  }
    
  
const ChartComponent4 = (props: Props) => {
    const { data } = props;

    return (
    <Flex direction={"column"} align={"center"}>
        {
            data.map((d)=>(<ChartComponent key={d.text} name={ d.text } score={d.score} />
            ))
        }
    </Flex>
    )
}

export default ChartComponent4;