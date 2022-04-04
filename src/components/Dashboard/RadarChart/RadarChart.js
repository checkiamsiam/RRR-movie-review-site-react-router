import React from 'react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip } from 'recharts';
import useChartData from '../../../hooks/Chart-data';

export default function RadarC() {
  const [chartData] = useChartData();
  return (
    <RadarChart
      cx={200}
      cy={150}
      outerRadius={50}
      width={350}
      height={350}
      data={chartData}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="day" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="revenue"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Tooltip></Tooltip>
    </RadarChart>
  );
}
