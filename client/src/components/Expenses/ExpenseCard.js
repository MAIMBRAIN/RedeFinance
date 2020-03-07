import React, {useState, setState} from 'react';
import {Container, Drawer, Grid, Card, CardContent, CardHeader, Typography, IconButton } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ExpenseData from './ExpenseData/ExpenseData';
import Subscriptions from '../../subscriptions.json';
import ExpensesForm from './ExpensesForm/ExpensesForm';

const ExpenseCard = (props) =>
{
    const [showForm, setShowForm] = useState(false)
    return(
        <Container>
                <Grid container spacing={3} justify='flex-start'>
                    <Grid item xs={9}>
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
                    {showForm && <ExpensesForm />}
                </Grid>
            </Container>
    )
}


export default ExpenseCard;