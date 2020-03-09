import React, {useState, useEffect} from 'react';
import {Container, Grid, Card, CardContent, CardHeader, Typography, IconButton } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ExpenseData from './ExpenseData/ExpenseData';
import ExpensesForm from './ExpensesForm/ExpensesForm';
import ExpenseHeader from './ExpenseHeader/ExpenseHeader';
import API from '../../utils/expenses'

const ExpenseCard = (props) =>
{
    const [showForm, setShowForm] = useState(false)
    const [type, setType] = useState();
    const [name, setName] = useState();
    const [category, setCategory] = useState();
    const [date, setDate] = useState(new Date());
    const [occurance, setOccurance] = useState()
    const [cost, setCost] = useState();
    const [expenses, setExpenses] = useState([]);

    useEffect(() =>
    {
        showExpenses();
    }, [])

    const showExpenses = () =>
    {
        API.getExpenses()
        .then(res => {
            console.log('Success', res);
            setExpenses(res.data);
        })
        .catch(err => console.log('Error: ', err))
    }

    // // Remove current expense
    // const removeExpense = () =>
    // {
    //     API.deleteExpense()
    //     .then(res => console.log('Expense Deleted', res))
    //     .catch(err => console.log('Error: ', err))
    // }

    // Total of expenses

    // Handles expense submit
    const handleSubmit = e => 
    {
        e.preventDefault();

        const data = {type: type, name: name, category: category, date: date, occurance: occurance, cost: cost};
        API.createExpense(data)
        .then(res => console.log('Success', res))
        .catch(err => console.log('Error: ', err));
        try {
            setShowForm(false);
            showExpenses();
        } catch (error) {
            console.log(error)
        }
        
    }

    return(
        <Container>
                <Grid container spacing={1} wrap={'wrap'}>
                    <Grid item xs={9}>
                    <Grid item xs={12}>
                        <Card className='variableRate'>
                            <Typography variant={'h6'} align={'left'}>
                                <CardHeader
                                    title={`Variable-Rate Expenses for ${props.month}: $${props.total}`}
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
                                {expenses.filter(rate => rate.type === 'Variable-Rate').map(expense => (
                                    <ExpenseData
                                        key={expense.name}
                                        name={expense.name}
                                        category={expense.category}
                                        date={new Date(expense.date).toDateString()}
                                        cost={expense.cost}
                                        // onClick={removeExpense}
                                    />
                                ))}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card className='flatRate'>
                            <Typography variant={'h6'} align={'left'}>
                                <CardHeader
                                    title={`Flat-Rate Expenses for ${props.month}: $${props.total}`}
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
                                        // onClick={removeExpense}
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
                                    handleSubmit={handleSubmit}
                                />}
                        </Grid>
                </Grid>
            </Container>
    )
}


export default ExpenseCard;