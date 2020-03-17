import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: '15px',
        width: '100%',
        padding: '5px',
        paddingLeft: '2%',
        maxWidth: '800px'
    }
}));


export default function MiniDrawer() {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <h2>Article title and source</h2>
            <p>Article description</p>
        </Paper>
    )
}