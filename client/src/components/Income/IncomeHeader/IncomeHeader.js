import React from 'react';
import Grid from '@material-ui/core/Grid'

const IncomeHeader = () =>
{
    return(
        <React.Fragment>
            <Grid container>
                <Grid item xs={4}>
                    Reason            
                </Grid>
                <Grid item xs={4}>
                    Date
                </Grid>
                <Grid item xs={4}>
                    Amount
                </Grid>
            </Grid>
            <hr></hr>
            <br></br>
        </React.Fragment>
    );
};

export default IncomeHeader;