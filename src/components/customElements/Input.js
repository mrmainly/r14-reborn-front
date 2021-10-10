import React, { forwardRef } from 'react'
import { TextField } from '@material-ui/core'

export const Input = forwardRef((props, ref) => {
    return (
        <TextField
            margin="normal"
            variant="outlined"
            fullWidth
            inputRef={ref}
            {...props}
        />
    )
})