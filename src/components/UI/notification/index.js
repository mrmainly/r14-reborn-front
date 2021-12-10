import React, { useContext } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { StateContext, DispatchContext } from '../../../store'
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    content: {
        [theme.breakpoints.down('sm')]: {
            marginTop: 60
        },
    }
}))

export default function SimpleSnackbar() {
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    const classes = useStyles()
    const handleClose = () => {
        dispatch({ type: 'notification', payload: { active: false } })
    }
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                autoHideDuration={3000}
                open={state.noti.active}
                onClose={handleClose}
                className={classes.content}
            >
                <Alert onClose={handleClose} severity={state.noti.status}>
                    {state.noti.text}
                </Alert>
            </Snackbar>
        </div>
    );
}