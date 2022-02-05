import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
    btn: {
        color: 'black',
        background: "#fff",
        border: 0,
        height: 48,
        padding: '0 20px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        borderTopLeftRadius: 15,
        borderEndEndRadius: 15,
        '&:focus': {
            outline: "none",
        },
        fontSize: 14,
    }
}));

const ButtonCustom = ({ text, onClick }) => {
    const classes = useStyles()
    return (
        <Button variant="contained" className={classes.btn} onClick={onClick} type="submit">
            {text}
        </Button>
    )
}

export default ButtonCustom