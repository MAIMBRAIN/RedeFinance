import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutline';


const ExpenseData = (props) =>
{
    return(
        <Grid container alignItems='center'>
            <Grid item xs={4}>
                {props.name}            
            </Grid>
            <Grid item xs={3}>
                {props.category}
            </Grid>
            <Grid item xs={3}>
                {props.date}
            </Grid>
            <Grid item xs={1}>
                ${props.cost}
            </Grid>
            <Grid item xs={1}>
                <IconButton>
                    <DeleteIcon fontSize='small' onClick={props.removeExpense}/>
                </IconButton>
            </Grid>
        </Grid>
    )
};

export default ExpenseData;