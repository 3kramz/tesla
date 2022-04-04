import React from 'react';
import InvestmentVSRevenue from '../InvestmentVsRevenue/InvestmentVSRevenue';
import MonthVSell from '../MonthVSell/MonthVSell';
import './DashBoard.css'

const DashBoard = () => {
    return (
        <div className='dash-board'>
         
           <MonthVSell></MonthVSell>
           <InvestmentVSRevenue></InvestmentVSRevenue>
        </div>
    );
};

export default DashBoard;