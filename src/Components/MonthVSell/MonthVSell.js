import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../Hooks/useData';
import './MonthVsSell.css'

const MonthVSell = () => {

    const [data]=useData('data.json')
    console.log(data)
    return (
        <div className='chart'>
       <h3>Sell - Month</h3>
        <LineChart 
        width={500} 
        height={300} 
        data={data} 
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
        <Line dataKey={"sell"}> </Line>
        <Tooltip />
         <Legend />
         <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={'month'}></XAxis>
        <YAxis dataKey={'sell'}></YAxis>
        </LineChart>
       
        </div>
    );
};

export default MonthVSell;