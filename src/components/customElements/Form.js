import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(0.5)
    }
}))

export const Form = ({ children, ...props }) => {
    const classes = useStyles()
    return (
        <form className={classes.root} {...props}>
            {children}
        </form>
    )
}