import React, {useState}  from 'react';
import { Container, Typography, Grid, Card, CardHeader, CardContent, IconButton } from '@material-ui/core';
import {AddBoxIcon} from '@material-ui/icons'
import IncomeHeader from './IncomeHeader/IncomeHeader';

const IncomeCard = (props) =>
{
    const [showForm, setShowForm] = useState(false)
    const [incomes, setIncomes] = useState([])

    const incomeTotal = () =>
    {

    }

    return(
        
        <Container>
            <br></br>
            <Typography variant={'h4'}>
                You have 'money' available to spend
            </Typography>
            <Grid container spacing={1} wrap={'wrap'}>
                    <Grid item xs={12}>
                        <Card className='income'>
                            <Typography variant={'h6'} align={'left'}>
                                <CardHeader
                                    title={`Income for ${props.month}: $${incomeTotal()}`}
                                    action=
                                    {
                                        <IconButton aria-label="settings">
                                            <AddBoxIcon onClick={() => setShowForm(!showForm)}/>
                                        </IconButton>
                                    }
                                />
                            </Typography>
                            <CardContent>
                                <IncomeHeader />
                                {incomes.map(income => 
                                {
                                    return (
                                        <ExpenseData
                                            key={income._id}
                                            reason={income.reason}
                                            date={new Date(income.date).toDateString()}
                                            cost={income.cost}
                                            removeIncome={() => removeIncome(income._id)}
                                        />
                                )})}
                            </CardContent>
                        </Card>
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
};

export default IncomeCard;