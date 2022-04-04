import React from 'react';
import { Bar, BarChart,  Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../../hooks/Chart-data';

export default function BarC() {
  const [chartData] = useChartData()
  return (
    <div className='m-2'>
      <BarChart width={340} height={300} data={chartData}>
        <Bar dataKey="revenue" fill="#8884d8" />
        <XAxis dataKey="day" />
        <YAxis dataKey="revenue" />
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
}
