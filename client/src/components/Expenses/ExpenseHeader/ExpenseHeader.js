import React from 'react';
import Grid from '@material-ui/core/Grid'

const ExpenseHeader = () =>
{
    return(
        <React.Fragment>
            <Grid container>
                <Grid item xs={4}>
                    Name            
                </Grid>
                <Grid item xs={3}>
                    Category
                </Grid>
                <Grid item xs={3}>
                    Date
                </Grid>
                <Grid item xs={1}>
                    Cost
                </Grid>
            </Grid>
            <hr></hr>
            <br></br>
        </React.Fragment>
    );
};

export default ExpenseHeader;