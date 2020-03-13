import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutline';


const IncomeData = (props) =>
{
    return(
        <Grid container alignItems='center'>
            <Grid item xs={4}>
                {props.reason}            
            </Grid>
            <Grid item xs={4}>
                {props.date}
            </Grid>
            <Grid item xs={3}>
                ${props.amount}
            </Grid>
            <Grid item xs={1}>
                <IconButton>
                    <DeleteIcon fontSize='small' onClick={props.removeIncome}/>
                </IconButton>
            </Grid>
        </Grid>
    )
};

export default IncomeData;