import React from 'react';
import {Grid, Card, Typography, CardHeader, CardContent, TextField, MenuItem, FormControl, Button} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns'
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';

const ExpensesForm = (props) =>
{
    const types = [{value:'Flat-Rate', label: 'Flat-Rate'}, {value:'Variable-Rate', label:'Variable-Rate'}]
    const recurring = [{value:'Monthly', label: 'Monthly'}, {value:'Yearly', label: 'Yearly'}]

    return(
        <Grid item xs>
            <Card>
                <Typography variant={'h6'} align='center'>
                    <CardHeader title='Add Expense'/>
                </Typography>
                <CardContent align='center'>
                    <FormControl>
                        <TextField
                            id='rates'
                            label='Select Rate Type'
                            value={props.type ? props.type:""}
                            onChange={e => props.setType(e.target.value)}
                            margin='normal'
                            
                            select
                        >
                            {types.map(rate => (
                            <MenuItem key={rate.value} value={rate.value}>
                                {rate.label}
                            </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id='name'
                            label='Name of Expense'
                            value={props.name ? props.name:""}
                            onChange={e => props.setName(e.target.value)}
                            margin='normal'
                            
                        >
                        </TextField>
                        <TextField
                            id='category'
                            label='Category of Expense'
                            value={props.category ? props.category:""}
                            onChange={e => props.setCategory(e.target.value)}
                            margin='normal'
                            
                        >
                        </TextField>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                variant='inline'
                                label='Expense Date'
                                value={props.date ? props.date:""}
                                onChange={props.setDate}
                            />
                        </MuiPickersUtilsProvider>
                        <TextField
                            id='occurance'
                            label='Occurance of Expense'
                            value={props.occurance ? props.occurance:""}
                            onChange={e => props.setOccurance(e.target.value)}
                            margin='normal'
                            select
                        >
                            {recurring.map(occur => (
                                <MenuItem key={occur.value} value={occur.value}>
                                    {occur.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id='cost'
                            label='Cost of Expense'
                            value={props.cost ? props.cost:""}
                            onChange={e => props.setCost(e.target.value)}
                            margin='normal'
                        >
                        </TextField>
                        <Button variant='contained' color='primary' type='submit' onClick={props.handleSubmit}>Add Expense</Button>
                    </FormControl>  
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ExpensesForm;