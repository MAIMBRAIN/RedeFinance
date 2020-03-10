import React, {useState, setState} from 'react';
import {Typography } from '@material-ui/core';
import ExpenseCard from '../components/Expenses/ExpenseCard'

const month = () =>
{
    let thisMonth = new Date().toLocaleDateString('default', {month: 'long'})
    return thisMonth;
}

const Dashboard = (props) => 
{    
    return (
        <div>
            <Typography variant={'h3'}>
                Welcome 'Name goes here', Your expenses for {month()} is 
            </Typography>

            <ExpenseCard month={month()}/>
        </div>
    )
};

export default Dashboard;