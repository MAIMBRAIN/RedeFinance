import React from 'react';
import { Grid, Card, CardContent, CardHeader, Typography, IconButton } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ExpenseData from './ExpenseData/ExpenseData';
import ExpensesForm from './ExpensesForm/ExpensesForm';
import ExpenseHeader from './ExpenseHeader/ExpenseHeader';

const ExpenseCard = (props) =>
{
    // Render
    return(
        <React.Fragment>
            <br></br>
            <Typography variant={'h4'}>
                Your expenses for {props.month} is ${props.expensesTotal}
            </Typography>
            <br></br>
            <Grid container spacing={1} wrap={'wrap'}>
                <Grid item xs={9}>
                <Grid item xs={12}>
                    <Card className='oneTime'>
                        <Typography variant={'h6'} align={'left'}>
                            <CardHeader
                                title={`One-Time Expenses for ${props.month}: $${props.onceTotal}`}
                                action=
                                {
                                    <IconButton aria-label="settings">
                                        <AddBoxIcon onClick={() => props.setShowExpenseForm(!props.showExpenseForm)}/>
                                    </IconButton>
                                }
                            />
                        </Typography>
                        <CardContent>
                            <ExpenseHeader />
                            {props.expenses.filter(rate => rate.type === 'One-Time').map(expense => 
                            {
                                return (
                                    <ExpenseData
                                        key={expense._id}
                                        name={expense.name}
                                        category={expense.category}
                                        date={new Date(expense.date).toDateString()}
                                        cost={expense.cost}
                                        removeExpense={() => props.removeExpense(expense._id)}
                                    />
                            )})}
                        </CardContent>
                    </Card>
                </Grid>
                <br></br>
                <Grid item xs={12}>
                    <Card className='variableRate'>
                        <Typography variant={'h6'} align={'left'}>
                            <CardHeader
                                title={`Variable-Rate Expenses for ${props.month}: $${props.variableRateTotal}`}
                            />
                        </Typography>
                        <CardContent>
                            <ExpenseHeader />
                            {props.expenses.filter(rate => rate.type === 'Variable-Rate').map(expense => 
                            {
                                return (
                                    <ExpenseData
                                        key={expense._id}
                                        name={expense.name}
                                        category={expense.category}
                                        date={new Date(expense.date).toDateString()}
                                        cost={expense.cost}
                                        removeExpense={() => props.removeExpense(expense._id)}
                                    />
                            )})}
                        </CardContent>
                    </Card>
                </Grid>
                <br></br>
                <Grid item xs={12}>
                    <Card className='flatRate'>
                        <Typography variant={'h6'} align={'left'}>
                            <CardHeader
                                title={`Flat-Rate Expenses for ${props.month}: $${props.flatRateTotal}`}
                            />
                        </Typography>
                        <CardContent>
                            <ExpenseHeader/>
                            {props.expenses.filter(rate => rate.type === 'Flat-Rate').map(expense => (
                                <ExpenseData
                                    key={expense.name}
                                    name={expense.name}
                                    category={expense.category}
                                    date={new Date(expense.date).toDateString()}
                                    cost={expense.cost}
                                    removeExpense={() => props.removeExpense(expense._id)}
                                />
                            ))}
                        </CardContent>
                    </Card>
                </Grid>
                </Grid>
                <Grid item xs={3}>
                    {props.showExpenseForm && 
                        <ExpensesForm
                            type={props.type}
                            name={props.name}
                            category={props.category}
                            date={props.date}
                            occurance={props.occurance}
                            cost={props.cost}
                            setType={props.setType}
                            setName={props.setName}
                            setCategory={props.setCategory}
                            setDate={props.setDate}
                            setOccurance={props.setOccurance}
                            setCost={props.setCost} 
                            handleSubmit={props.handleSubmit}
                        />}
                </Grid>
            </Grid>
        </React.Fragment>
    );
};


export default ExpenseCard;