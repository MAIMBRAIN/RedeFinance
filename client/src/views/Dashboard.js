import React, {useState, useEffect} from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import ExpenseCard from '../components/Expenses/ExpenseCard';
import IncomeCard from '../components/Income/IncomeCard';
import IncomeAPI from '../utils/incomes';
import ExpenseAPI from '../utils/expenses';

const month = () =>
{
    let thisMonth = new Date().toLocaleDateString('default', {month: 'long'})
    return thisMonth;
}

const Dashboard = (props) => 
{   
    // =====================================================================
    // States
    // =====================================================================
    const clear = '';
    // Income States
    const [showIncomeForm, setShowIncomeForm] = useState(false);
    const [reason, setReason] = useState();
    const [amount, setAmount] = useState();
    const [incomes, setIncomes] = useState([]);
    // Expense States
    const [showExpenseForm, setShowExpenseForm] = useState(false);
    const [type, setType] = useState();
    const [name, setName] = useState();
    const [category, setCategory] = useState();
    const [date, setDate] = useState(new Date());
    const [occurance, setOccurance] = useState()
    const [cost, setCost] = useState();
    const [expenses, setExpenses] = useState([]);

    // When page loads show all Incomes and Expenses
    useEffect(() =>
    {
        showExpenses();
        showIncome();
    }, []);
    
    // =====================================================================
    // Income CRUD Operations
    // =====================================================================
    
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
            setShowIncomeForm(false);
        } catch (error) {
            console.log(error);
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
        .catch(err => console.log('Error: ', err));

        incomesTotal();
    };

    // Delete Income
    const removeIncome = (id) =>
    {
        IncomeAPI.deleteIncome(id)
        .then(res => console.log('Income Deleted', res))
        .catch(err => console.log('Error: ', err));
        try {
            showIncome();
        } catch (error) {
            console.log(error);
        }
    };

    // =====================================================================
    // Expense CRUD Operations
    // =====================================================================
    
    // Creates new Expense
    const handleExpenseSubmit = e => 
    {
        e.preventDefault();

        const data = {
            type: type,
            name: name,
            category: category,
            date: date,
            occurance: occurance,
            cost: cost
        };
        ExpenseAPI.createExpense(data)
            .then(res => console.log('Success', res))
            .catch(err => console.log('Error: ', err));
        try {
            showExpenses();
            setType(clear);
            setName(clear);
            setCategory(clear);
            setDate(new Date());
            setOccurance(clear);
            setCost(clear);
            setShowExpenseForm(false);
        } catch (error) {
            console.log(error);
        };
    };

    // Shows all expenses
    const showExpenses = () =>
    {
        ExpenseAPI.getExpenses()
        .then(res => {
            console.log('Success', res);
            setExpenses(res.data);
        })
        .catch(err => console.log('Error: ', err));

        onceTotal();
        flatRateTotal();
        variableRateTotal();
    };

    // Remove current expense
    const removeExpense = (id) =>
    {
        ExpenseAPI.deleteExpense(id)
        .then(res => console.log('Expense Deleted', res))
        .catch(err => console.log('Error: ', err));
        try {
            showExpenses();
        } catch (error) {
            console.log(error);
        };
    };

    // =====================================================================
    // Totals Functions
    // =====================================================================

    // Amount Available to Spend
    const available = () =>
    {
        return (incomesTotal() - expensesTotal()).toFixed(2);
    }
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

    // Expense Totals
    // =====================================================================
    // Total of expenses
    const expensesTotal = () =>
    {
        return onceTotal() + flatRateTotal() + variableRateTotal();
    }

    // Total of One Time Expenses
    const onceTotal = () =>
    {
        let oneTotal = 0;
        expenses.filter(rate => rate.type === 'One-Time').forEach(expense => {
            return (oneTotal = oneTotal + expense.cost);
        });
        
        return oneTotal;
    }

    // Total of Variable Rate expenses
    const variableRateTotal = () =>
    {
        let variableTotal = 0;
        expenses.filter(rate => rate.type === 'Variable-Rate').forEach(expense => {
            return (variableTotal = variableTotal + expense.cost);
        });
        
        return variableTotal;
    };

    // Total of Flat Rate expenses
    const flatRateTotal = () =>
    {
        let flatTotal = 0;
        expenses.filter(rate => rate.type === 'Flat-Rate').forEach(expense => {
            return (flatTotal = flatTotal + expense.cost);
        });
        
        return flatTotal;
    };

    // Render
    return (
        <Container>
            <br></br>
            <Typography variant={'h4'}>
                You have ${available()} available to spend
            </Typography>
            <Grid container wrap={'wrap'}>
                <Grid item xs={12}>
                    <IncomeCard 
                        month={month()}
                        incomesTotal={incomesTotal()}
                        showIncomeForm={showIncomeForm}
                        incomes={incomes}
                        reason={reason}
                        date={date}
                        amount={amount}
                        setShowIncomeForm={setShowIncomeForm}
                        setReason={setReason}
                        setDate={setDate}
                        setAmount={setAmount}
                        removeIncome={removeIncome}
                        handleSubmit={handleIncomeSubmit}
                    />
                    <ExpenseCard 
                        month={month()}
                        expensesTotal={expensesTotal()}
                        flatRateTotal={flatRateTotal()}
                        variableRateTotal={variableRateTotal()}
                        onceTotal={onceTotal()}
                        showExpenseForm={showExpenseForm}
                        expenses={expenses}
                        type={type}
                        name={name}
                        category={category}
                        date={date}
                        occurance={occurance}
                        cost={cost}
                        setShowExpenseForm={setShowExpenseForm}
                        setType={setType}
                        setName={setName}
                        setCategory={setCategory}
                        setDate={setDate}
                        setOccurance={setOccurance}
                        setCost={setCost}
                        removeExpense={removeExpense}
                        handleSubmit={handleExpenseSubmit}
                    />
                </Grid>
            </Grid>
        </Container>
    )
};

export default Dashboard;