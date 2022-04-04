import React from 'react';
import BarC from './BarChart/BarChart';
import LineC from './LineChart/LineChart';
import RadarC from './RadarChart/RadarChart';

const Dashboard = () => {
  return (
    <div>
      <h1 className='font-semibold text-5xl m-5'>Box Office Charts</h1>
      <div className="analysis-charts">
        <LineC></LineC>
        <BarC></BarC>
        <RadarC></RadarC>
      </div>
    </div>
  );
};

export default Dashboard;