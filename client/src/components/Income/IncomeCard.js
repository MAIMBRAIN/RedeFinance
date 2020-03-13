import React from 'react';
import { Typography, Grid, Card, CardHeader, CardContent, IconButton } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IncomeHeader from './IncomeHeader/IncomeHeader';
import IncomeData from './IncomeData/IncomeData';
import IncomeForm from './IncomeForm/IncomeForm'

const IncomeCard = (props) =>
{   
    return(
        <React.Fragment>
            <br></br>
            <Grid container spacing={1} wrap={'wrap'}>
                <Grid item xs={9}>
                    <Card className='income'>
                        <Typography variant={'h6'} align={'left'}>
                            <CardHeader
                                title={`Income for ${props.month}: $${props.incomesTotal}`}
                                action=
                                {
                                    <IconButton aria-label="settings">
                                        <AddBoxIcon onClick={() => props.setShowIncomeForm(!props.showIncomeForm)}/>
                                    </IconButton>
                                }
                            />
                        </Typography>
                        <CardContent>
                            <IncomeHeader />
                            {props.incomes.map(income => 
                            {
                                return (
                                    <IncomeData
                                        key={income._id}
                                        reason={income.reason}
                                        date={new Date(income.date).toDateString()}
                                        amount={income.amount}
                                        removeIncome={() => props.removeIncome(income._id)}
                                    />
                            )})}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                        {props.showIncomeForm && 
                            <IncomeForm
                                reason={props.reason}
                                date={props.date}
                                amount={props.amount}
                                setReason={props.setReason}
                                setDate={props.setDate}
                                setAmount={props.setAmount}
                                handleSubmit={props.handleSubmit}
                            />}
                    </Grid>
            </Grid>
        </React.Fragment>
    )
};

export default IncomeCard;