import React, {useState} from 'react'
import httpUser from '../httpUser'
import {makeStyles, Container, CssBaseline, Grid, Typography, Button, TextField, Link } from '@material-ui/core'

const SignUp = (props) => {
    const [fields, setFields] = useState({name: '', email: "", password: ""});

    // used to update user input for either password or email
    const onInputChange = (e) => {
        e.persist();
        setFields(fields => ({...fields, [e.target.name]: e.target.value}))
    };

    // used to submit user values for password and email
    const onFormSubmit = async (e) => {
        e.preventDefault();
        const user = await httpUser.signUp(fields);

        setFields({name: '', email: '', password: ''} );
        if(user) {
            props.onSignUpSuccess(user);
            props.history.push('/dashboard');
        }
    };

    // Material-UI Styling
    const useStyles = makeStyles(theme => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(3),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    const classes = useStyles()

    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                Sign up
                </Typography>
                <form className={classes.form} onChange={onInputChange} onSubmit={onFormSubmit} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <TextField
                        autoComplete="name"
                        name="name"
                        variant="outlined"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        autoFocus
                        value={fields.name}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={fields.email}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={fields.password}
                    />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign Up
                </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                    <Link href="/login" variant="body2">
                        Already have an account? Sign in
                    </Link>
                    </Grid>
                </Grid>
                </form>
            </div>
        </Container>
    )
};

export default SignUp;