import React from 'react';
import MonthVSell from '../MonthVSell/MonthVSell';
import './DashBoard.css'

const DashBoard = () => {
    return (
        <div className='dash-board'>
         
           <MonthVSell></MonthVSell>
        </div>
    );
};

export default DashBoard;