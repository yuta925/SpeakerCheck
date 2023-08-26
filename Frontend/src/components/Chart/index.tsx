import React, { PureComponent } from 'react';
import { text } from "stream/consumers";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


type Props = {
  name: String;
  score: Number;
};

const ChartComponent = (props: Props) => {
  const { name, score } = props;
const data = [
  {
    name: name,
    score: score,
  }
]

  return (
        <BarChart
        width={600}
        height={200}
        layout="vertical"
        data={data}>
        <XAxis type="number" domain={[0, 25]}/>
        <YAxis   dataKey="name" type="category"  />
        <Bar dataKey="score" fill="#8884d8" />
</BarChart>

  );
};

export default ChartComponent;