import React from 'react';
import { Link } from 'react-router-dom';
import {Typography} from '@material-ui/core'
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div className = "header">
            {/* Logo */}
            <div className = "nav-title">
                <Typography variant={'h4'}>
                    RedeFinance
                </Typography>
            </div>

            {/* Page Links */}
            <div className = "nav-items">
                {props.currentUser ?
                    (
                        <span>
                            <Typography variant={'h6'}>
                                <Link className ="nav-link" to='/dashboard'>Dashboard</Link>
                                <Link className ="nav-link" to='/logout'>Log Out</Link>
                            </Typography>
                        </span>
                    ) :
                    (
                    <span>
                        <Typography variant={'h6'}>
                            <Link className = "nav-link" to='/Home'>Home</Link>
                            <Link className ="nav-link" to="/login">Log In</Link>
                            <Link className ="nav-link" to="/signup">Sign Up</Link>
                        </Typography>
                    </span>
                    )
                }
            </div>
        </div>
    )
};

export default NavBar;
