import React from 'react';
import {Grid, Card, Typography, CardHeader, CardContent, TextField, MenuItem, FormControl, Button, InputAdornment} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns'
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';

const IncomeForm = (props) =>
{
    return(
        <Grid item xs>
            <Card>
                <Typography variant={'h6'} align='center'>
                    <CardHeader title='Add Income'/>
                </Typography>
                <CardContent align='center'>
                    <FormControl>
                        <TextField
                            id='reason'
                            label='Reason for Income'
                            value={props.reason ? props.reason:""}
                            onChange={e => props.setReason(e.target.value)}
                            margin='normal'
                            select
                        >
                        </TextField>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                variant='inline'
                                label='Income Date'
                                value={props.date ? props.date:""}
                                onChange={props.setDate}
                            />
                        </MuiPickersUtilsProvider>
                        <TextField
                            id='amount'
                            label='Amount of Income'
                            value={props.cost ? props.cost:""}
                            onChange={e => props.setAmount(e.target.value)}
                            margin='normal'
                            InputProps={{startAdornment: <InputAdornment position='start'>$</InputAdornment>}}
                        >
                        </TextField>
                        <Button variant='contained' color='primary' type='submit' onClick={props.handleSubmit}>Add Income</Button>
                    </FormControl>  
                </CardContent>
            </Card>
        </Grid>
    );
};

export default IncomeForm;