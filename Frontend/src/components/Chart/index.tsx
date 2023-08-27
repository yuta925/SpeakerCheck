import React, { PureComponent } from 'react';
import { text } from "stream/consumers";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label, ReferenceArea } from 'recharts';
import { Center } from '@mantine/core';


type Props = {
  name: String;
  score: Number;
};

const style={
  fontSize: "25px"
}

const formatter= (score: Number)=>{
  return `${score}/25`;
}

const ChartComponent = (props: Props) => {
  const { name, score } = props;
const data = [
  {
    name: name,
    score: score,
  }
]

  return (
 <Center>
        <BarChart
        width={600}
        height={75}
        layout="vertical"
        data={data}>
        <XAxis type="number" domain={[0, 25]} hide={true} />
        <YAxis dataKey="name" type="category" fontSize={"30px"} tickLine={false} axisLine={false} width={200} />
        <Bar dataKey="score" fill="#9ACDFF" background={{ fill: '#eee'}} label={{position: "right", style, formatter}} >
        </Bar>
</BarChart>
</Center>
  );
};

export default ChartComponent;