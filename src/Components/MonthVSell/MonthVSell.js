import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
import useData from '../Hooks/useData';
import './MonthVsSell.css'

const MonthVSell = () => {

    const [data]=useData('data.json')
    console.log(data)
    return (
        <div className='monthsell'>
       <h3>Sell - Month</h3>
        <LineChart width={500} height={350} data={data}>
        <Line dataKey={"sell"}> </Line>
        <XAxis dataKey={'month'}></XAxis>
        <YAxis dataKey={'sell'}></YAxis>
        </LineChart>
       
        </div>
    );
};

export default MonthVSell;