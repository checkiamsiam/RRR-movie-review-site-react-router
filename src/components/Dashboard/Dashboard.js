import React from 'react';
import BarC from './BarChart/BarChart';
import LineC from './LineChart/LineChart';
import RadarC from './RadarChart/RadarChart';
import RadialC from './RadialChart/RadialChart';

const Dashboard = () => {
  return (
    <div>
      <h1 className='font-semibold text-5xl m-5'>Box Office Charts</h1>
      <div className="analysis-charts grid md:grid-cols-2">
        <LineC></LineC>
        <BarC></BarC>
        <RadarC></RadarC>
        <RadialC></RadialC>
      </div>
    </div>
  );
};

export default Dashboard;