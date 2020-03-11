import React, {useState, useEffect}  from 'react';
import { Container, Typography, Grid, Card, CardHeader, CardContent, IconButton } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IncomeHeader from './IncomeHeader/IncomeHeader';
import IncomeData from './IncomeData/IncomeData';
import IncomeForm from './IncomeForm/IncomeForm'
import IncomeAPI from '../../utils/incomes'

const IncomeCard = (props) =>
{   
    const clear = '';
    const [showForm, setShowForm] = useState(false);
    const [reason, setReason] = useState();
    const [date, setDate] = useState(new Date());
    const [amount, setAmount] = useState();
    const [incomes, setIncomes] = useState([]);

    // When page loads show all incomes
    useEffect(() =>
    {
        showIncome();
    }, []);

    // Total amount of Income
    const incomesTotal = () =>
    {
        let incomeTotal = 0;
        incomes.forEach(income => 
            {
                return (incomeTotal = incomeTotal + income.amount);
            });

        return incomeTotal;
    };


    // Create new Income
    const handleIncomeSubmit = e =>
    {
        e.preventDefault();

        const data = {reason: reason, date: date, amount: amount};
        IncomeAPI.createIncome(data)
        .then(res => console.log('Success', res))
        .catch(err => console.log('Error: ', err));
        try {
            showIncome();
            setReason(clear);
            setDate(new Date());
            setAmount(clear);
            setShowForm(false);
        } catch (error) {
            console.log(error)
        }
    };

    // Show all Incomes
    const showIncome = () =>
    {
        IncomeAPI.getIncomes()
        .then(res => 
            {
                console.log('Success', res);
                setIncomes(res.data);
            })
        .catch(err => console.log('Error: ', err))

        incomesTotal();
    };

    // Delete Income
    const removeIncome = (id) =>
    {

    };

    return(
        
        <Container>
            <br></br>
            <Typography variant={'h4'}>
                You have ${incomesTotal()} available to spend
            </Typography>
            <Grid container spacing={1} wrap={'wrap'}>
                <Grid item xs={9}>
                    <Card className='income'>
                        <Typography variant={'h6'} align={'left'}>
                            <CardHeader
                                title={`Income for ${props.month}: $${incomesTotal()}`}
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
                                    <IncomeData
                                        key={income._id}
                                        reason={income.reason}
                                        date={new Date(income.date).toDateString()}
                                        amount={income.amount}
                                        removeIncome={() => removeIncome(income._id)}
                                    />
                            )})}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                        {showForm && 
                            <IncomeForm
                                reason={reason}
                                date={date}
                                amount={amount}
                                setReason={setReason}
                                setDate={setDate}
                                setAmount={setAmount}
                                handleSubmit={handleIncomeSubmit}
                            />}
                    </Grid>
            </Grid>
        </Container>
    )
};

export default IncomeCard;