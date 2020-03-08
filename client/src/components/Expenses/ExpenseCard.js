import React, {useState} from 'react';
import {Container, Grid, Card, CardContent, CardHeader, Typography, IconButton } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ExpenseData from './ExpenseData/ExpenseData';
import Subscriptions from '../../subscriptions.json';
import ExpensesForm from './ExpensesForm/ExpensesForm';
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

    const handleSubmit = e => 
    {
        e.preventDefault();

        const data = {type: type, name: name, category: category, date: date, occurance: occurance, cost: cost};
        API.createExpense(data)
        .then(res => console.log('Success', res))
        .catch(err => console.log('Error: ', err));
        setShowForm(false);
    }

    return(
        <Container>
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        <Card className='flatRate'>
                            <Typography variant={'h6'} align={'left'}>
                                <CardHeader
                                    title={`Flat-Rate Expenses for ${props.month}: $${props.total}`}
                                    action=
                                    {
                                        <IconButton aria-label="settings">
                                            <AddBoxIcon onClick={() => setShowForm(!showForm)}/>
                                        </IconButton>
                                    }
                                />
                            </Typography>
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={5}>
                                        Name            
                                    </Grid>
                                    <Grid item xs={3}>
                                        Category
                                    </Grid>
                                    <Grid item xs={2}>
                                        Date
                                    </Grid>
                                    <Grid item xs={1}>
                                        Cost
                                    </Grid>
                                </Grid>
                                <hr></hr>
                                <br></br>
                                {Subscriptions.map(item =>
                                {
                                    return(
                                        <ExpenseData
                                            key={item.name}
                                            name={item.name}
                                            category={item.category}
                                            date={item.date}
                                            cost={item.cost}
                                        />
                                    )
                                })}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs>
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