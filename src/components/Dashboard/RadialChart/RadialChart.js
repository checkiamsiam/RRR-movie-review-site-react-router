import React from 'react';
import { Legend, RadialBar, RadialBarChart, Tooltip } from 'recharts';
import useChartData from '../../../hooks/Chart-data';

export default function RadialC() {
  const [chartData] = useChartData();
  const style = {
    top: 0,
    left: 350,
    lineHeight: "24px"
  };
  return (
    <RadialBarChart
      width={350}
      height={350}
      cx={150}
      cy={150}
      innerRadius={20}
      outerRadius={140}
      barSize={10}
      data={chartData}
    >
      <Tooltip></Tooltip>
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "#fff" }}
        background
        clockWise
        dataKey="revenue"
      />
    </RadialBarChart>
  );
}