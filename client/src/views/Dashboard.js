import React, {useState, setState} from 'react';
import ExpenseCard from '../components/Expenses/ExpenseCard'
import IncomeCard from '../components/Income/IncomeCard';
import { Grid } from '@material-ui/core';

const month = () =>
{
    let thisMonth = new Date().toLocaleDateString('default', {month: 'long'})
    return thisMonth;
}

const Dashboard = (props) => 
{    
    return (
        <div>
            <Grid container wrap={'wrap'}>
                <Grid item xs={12}>
                    <IncomeCard month={month()}/>
                    <ExpenseCard month={month()}/>
                </Grid>
            </Grid>
        </div>
    )
};

export default Dashboard;