import React, { useState } from 'react';
import {Grid, Card, Typography, CardHeader, CardContent, TextField, MenuItem, FormControl} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns'
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';

const ExpensesForm = (props) =>
{
    const types = [{value:'Flat-Rate', label: 'Flat-Rate'}, {value:'Variable-Rate', label:'Variable-Rate'}]
    const [type, setType] = useState();
    const [name, setName] = useState();
    const [category, setCategory] = useState();
    const [selectedDate, handleDateChange] = useState(new Date());
    const [cost, setCost] = useState();

    return(
        <Grid item xs>
            <Card>
                <Typography variant={'h6'}>
                    <CardHeader title='Add Expense'/>
                </Typography>
                <CardContent>
                    <FormControl margin='dense'>
                        <TextField
                            id='rates'
                            label="Select Rate Type"
                            value={type}
                            onChange={e => setType(e.target.value)}
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
                            value={name}
                            onChange={e => setName(e.target.value)}
                            variant={'outlined'}
                        >
                        </TextField>
                        <TextField
                            id='category'
                            label='Category of Expense'
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            variant={'outlined'}
                        >
                        </TextField>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                                variant='inline'
                                label='Expense Date'
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </MuiPickersUtilsProvider>
                        <TextField
                            id='cost'
                            label='Cost of Expense'
                            value={cost}
                            onChange={e => setCost(e.target.value)}
                            variant={'outlined'}
                        >
                        </TextField>
                    </FormControl>
                        
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ExpensesForm;