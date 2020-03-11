import React, {useState, useEffect} from 'react';
import {Container, Grid, Card, CardContent, CardHeader, Typography, IconButton } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ExpenseData from './ExpenseData/ExpenseData';
import ExpensesForm from './ExpensesForm/ExpensesForm';
import ExpenseHeader from './ExpenseHeader/ExpenseHeader';
import API from '../../utils/expenses'

const ExpenseCard = (props) =>
{
    const clear = '';
    const [showForm, setShowForm] = useState(false)
    const [type, setType] = useState();
    const [name, setName] = useState();
    const [category, setCategory] = useState();
    const [date, setDate] = useState(new Date());
    const [occurance, setOccurance] = useState()
    const [cost, setCost] = useState();
    const [expenses, setExpenses] = useState([]);

    // When page loads show all expenses
    useEffect(() =>
    {
        showExpenses();
    }, [])

    // Creates new Expense
    const handleExpenseSubmit = e => {
        e.preventDefault();

        const data = {
            type: type,
            name: name,
            category: category,
            date: date,
            occurance: occurance,
            cost: cost
        };
        API.createExpense(data)
            .then(res => console.log('Success', res))
            .catch(err => console.log('Error: ', err));
        try {
            showExpenses();
            setType(clear)
            setName(clear)
            setCategory(clear)
            setDate(new Date())
            setOccurance(clear)
            setCost(clear)
            setShowForm(false);
        } catch (error) {
            console.log(error)
        }

    }

    // Shows all expenses
    const showExpenses = () =>
    {
        API.getExpenses()
        .then(res => {
            console.log('Success', res);
            setExpenses(res.data);
        })
        .catch(err => console.log('Error: ', err))

        flatRateTotal()
        variableRateTotal()
    }

    // Remove current expense
    const removeExpense = (id) =>
    {
        API.deleteExpense(id)
        .then(res => console.log('Expense Deleted', res))
        .catch(err => console.log('Error: ', err))
        console.log(id)
        try {
            showExpenses();
        } catch (error) {
            console.log(error)
        }
    }

    // Total of expenses
    const expensesTotal = () =>
    {
        return onceTotal() + flatRateTotal() + variableRateTotal()
    }

    // Total of One Time Expenses
    const onceTotal = () =>
    {
        let oneTotal = 0;
        expenses.filter(rate => rate.type === 'One-Time').forEach(expense => {
            return (oneTotal = oneTotal + expense.cost)
        });
        
        return oneTotal;
    }

    // Total of Variable Rate expenses
    const variableRateTotal = () =>
    {
        let variableTotal = 0;
        expenses.filter(rate => rate.type === 'Variable-Rate').forEach(expense => {
            return (variableTotal = variableTotal + expense.cost)
        });
        
        return variableTotal;
    }
    // Total of Flat Rate expenses
    const flatRateTotal = () =>
    {
        let flatTotal = 0;
        expenses.filter(rate => rate.type === 'Flat-Rate').forEach(expense => {
            return (flatTotal = flatTotal + expense.cost)
        });
        
        return flatTotal;
    }

    // Render
    return(
        <Container>
            <br></br>
            <Typography variant={'h4'}>
                Your expenses for {props.month} is ${expensesTotal()}
            </Typography>
            <br></br>
                <Grid container spacing={1} wrap={'wrap'}>
                    <Grid item xs={9}>
                    <Grid item xs={12}>
                        <Card className='oneTime'>
                            <Typography variant={'h6'} align={'left'}>
                                <CardHeader
                                    title={`One-Time Expenses for ${props.month}: $${onceTotal()}`}
                                    action=
                                    {
                                        <IconButton aria-label="settings">
                                            <AddBoxIcon onClick={() => setShowForm(!showForm)}/>
                                        </IconButton>
                                    }
                                />
                            </Typography>
                            <CardContent>
                                <ExpenseHeader />
                                {expenses.filter(rate => rate.type === 'One-Time').map(expense => 
                                {
                                    return (
                                        <ExpenseData
                                            key={expense._id}
                                            name={expense.name}
                                            category={expense.category}
                                            date={new Date(expense.date).toDateString()}
                                            cost={expense.cost}
                                            removeExpense={() => removeExpense(expense._id)}
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
                                    title={`Variable-Rate Expenses for ${props.month}: $${variableRateTotal()}`}
                                />
                            </Typography>
                            <CardContent>
                                <ExpenseHeader />
                                {expenses.filter(rate => rate.type === 'Variable-Rate').map(expense => 
                                {
                                    return (
                                        <ExpenseData
                                            key={expense._id}
                                            name={expense.name}
                                            category={expense.category}
                                            date={new Date(expense.date).toDateString()}
                                            cost={expense.cost}
                                            removeExpense={() => removeExpense(expense._id)}
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
                                    title={`Flat-Rate Expenses for ${props.month}: $${flatRateTotal()}`}
                                />
                            </Typography>
                            <CardContent>
                                <ExpenseHeader/>
                                {expenses.filter(rate => rate.type === 'Flat-Rate').map(expense => (
                                    <ExpenseData
                                        key={expense.name}
                                        name={expense.name}
                                        category={expense.category}
                                        date={new Date(expense.date).toDateString()}
                                        cost={expense.cost}
                                        removeExpense={() => removeExpense(expense._id)}
                                    />
                                ))}
                            </CardContent>
                        </Card>
                    </Grid>
                    </Grid>
                    <Grid item xs={3}>
                            {showForm && 
                                <ExpensesForm
                                    type={type}
                                    name={name}
                                    category={category}
                                    date={date}
                                    occurance={occurance}
                                    cost={cost}
                                    setType={setType}
                                    setName={setName}
                                    setCategory={setCategory}
                                    setDate={setDate}
                                    setOccurance={setOccurance}
                                    setCost={setCost} 
                                    handleSubmit={handleExpenseSubmit}
                                />}
                        </Grid>
                </Grid>
            </Container>
    )
}


export default ExpenseCard;