import { BarChart, Bar, XAxis, YAxis } from "recharts";
import { Box, Text } from "@mantine/core";

type Props = {
  name: String;
  score: Number;
};

const style = {
  fontSize: "25px",
};

const formatter = (score: Number) => {
  return `${score}/25`;
};

const ChartComponent = (props: Props) => {
  const { name, score } = props;
  const data = [
    {
      name: name,
      score: score,
    },
  ];

  return (
    <Box pos={"relative"} w={"fit-content"}>
      <BarChart width={600} height={75} layout="vertical" data={data}>
        <XAxis type="number" domain={[0, 25]} hide={true} />
        <YAxis
          dataKey="name"
          type="category"
          fontSize={"30px"}
          tickLine={false}
          axisLine={false}
          width={200}
        />
        <Bar dataKey="score" fill="#9ACDFF" background={{ fill: "#eee" }}></Bar>
      </BarChart>
      <Text
        pos={"absolute"}
        top={"50%"}
        fz={25}
        right={40}
        sx={{
          transform: "translateY(-50%)",
        }}
      >
        {formatter(score)}
      </Text>
    </Box>
  );
};

export default ChartComponent;
