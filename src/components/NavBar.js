import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                React & Material-UI Sample Application
                </Typography>
                <Button variant="outlined" color="inherit" >
                    Button 1
                </Button>
                <Button variant="outlined" color="inherit">
                    Button 2
                </Button>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;