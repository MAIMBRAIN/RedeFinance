import React, {useState, setState} from 'react';
import {Typography } from '@material-ui/core';
import ExpenseCard from '../components/Expenses/ExpenseCard'
import Subscriptions from '../subscriptions.json'

const month = () =>
{
    let thisMonth = new Date().toLocaleDateString('default', {month: 'long'})
    return thisMonth;
}

const total = () =>
{
    let total = 0;
    Subscriptions.forEach(item => {
        return(total = total + item.cost)
    });
    return total;
}

const Dashboard = (props) => 
{    
    return (
        <div>
            <Typography variant={'h3'}>
                Welcome 'Name goes here', Your expenses for {month()} is ${total()}
            </Typography>

            <ExpenseCard month={month()} total={total()}/>
        </div>
    )
};

export default Dashboard;