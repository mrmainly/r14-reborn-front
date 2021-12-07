import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function DenseTable({ rows }) {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableBody>
                    {rows ? rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.type == 'carrot' ?
                                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography>{row.name}</Typography>
                                        <img src={'/image/Frame3281.png'} style={{ marginLeft: 5, marginTop: '-5px' }} />
                                    </Box>
                                    : row.name}
                            </TableCell>
                            <TableCell align="left">{row.type == 'hour' ? row.value + ' / час' : row.value} {row.type == 'carrot' ? '' : <img src={'/image/Frame3281.png'} style={{ marginLeft: 5, marginBottom: '-4px' }} />}</TableCell>
                        </TableRow>
                    )) : 'ytn'}
                </TableBody>
            </Table>
        </TableContainer>
    );
}