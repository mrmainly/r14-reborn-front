import React, { useContext } from 'react'
import { Box, Typography, Card, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import { StateContext } from '../../store';

import themeMain from '../../theme'

const useStyles = makeStyles((theme) => ({
    btn: {
        color: 'white',
        border: 0,
        height: 35,
        padding: '0 10px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        borderTopLeftRadius: 10,
        borderEndEndRadius: 10,
        '&:focus': {
            outline: "none",
        },
        fontSize: 14,
        marginTop: 10
    },
    priceBlog: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: 250,
        textAlign: 'center',
        padding: 20,
        borderTopLeftRadius: 15,
        borderEndEndRadius: 15,
        boxShadow: '1px 2px 11px rgba(0, 0, 0, 0.25)'
    }

}))

const StatusCards = ({ status, price }) => {
    const classes = useStyles()
    const state = useContext(StateContext)
    const statusBlogBackground = () => {
        switch (status) {
            case '3':
                return '#E1BD00'
                break;
            case '2':
                return '#D959DC'
                break;
            case '1':
                return '#72BBFF'
        }
    }
    const statusName = (propsData) => {
        switch (propsData) {
            case '3':
                return 'premium'
            case '2':
                return 'vip'
            case '1':
                return 'common'
            default:
                return 'Нету статуса'
        }
    }
    const sendStatus = () => {
        axios.post('/api/sendStatus', {
            survey: state.cardsId.id,
            name: status
        }).then((res) => {
            // location.reload()
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <Card className={classes.root}>
            <Box>
                <Typography variant="h6" style={{ color: statusBlogBackground(), textTransform: 'uppercase', fontWeight: 'bold' }}>{statusName(status)}</Typography>
            </Box>
            <Box>
                <Box className={classes.priceBlog}>
                    <Typography variant="h2">{price}</Typography>
                    <Typography style={{ marginLeft: 5 }}>руб</Typography>
                </Box>
                <Typography>за публикацию<br /> анкеты</Typography>
            </Box>
            <Box>
                <Button variant="contained" className={classes.btn} style={{ background: statusBlogBackground() }} onClick={() => {
                    sendStatus()
                }}>Активировать</Button>
            </Box>
        </Card>
    )
}

export default StatusCards