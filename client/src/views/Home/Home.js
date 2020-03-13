import React from 'react';
import {Container, Grid, Typography} from '@material-ui/core'
import './Home.css';

function Home() {
    return (
        <div className="App">
            <Container>
                <Grid container>
                    <Typography className='title' variant={'h1'}>
                        RedeFinance
                    </Typography>
                </Grid>
                <Grid container>
                    <Typography className='tagline' variant={'h5'}>
                        Redefine the way you keep track of your finances
                    </Typography>
                </Grid>
                <br></br>
                <Grid container>
                    <Typography variant={'h5'}>
                        Keep track of your finances with this tool by inputting your monthly or yearly
                        expenses and finding out how much you have remaining to spend with your income.
                    </Typography>
                </Grid>
            </Container>
        </div>
    );
}

export default Home;
