import React, { useState, useEffect } from 'react';
import { AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useStyles from './styles';
import memories from '../../images/memories.png';
import memoriesText from '../../images/memories_text.png';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';


const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT'})
        navigate("/");
    }

    useEffect(() => {
        const token = user?.token;
        if(token) {
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <Link to="/" className={classes.brandContainer}>
            <img src={memoriesText} alt="memoriesicon" height="45px"/>
            <img className={classes.image} src={memories} alt="icon" height="40" />
        </Link>
        <Toolbar className={classes.toolbar}>
            { user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.picture}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.username} variant="h6">{user.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>

            ) : (
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )}
        </Toolbar>
    </AppBar>
  )
}

export default Navbar;
