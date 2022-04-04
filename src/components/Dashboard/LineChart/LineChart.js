import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import useChartData from '../../../hooks/Chart-data';

const LineC = () => {
  const [chartData] = useChartData();
  return (
    <div className='m-2'>
      <LineChart width={340} height={300} data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="screen" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="day" />
        <YAxis dataKey="revenue"/>
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default LineC;