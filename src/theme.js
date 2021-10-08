import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        background: {
            default: 'linear-gradient(180deg, #028383 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(50% 50% at 50% 50%, #FFDB1C 0%, rgba(250, 26, 255, 0) 100%), conic-gradient(from 168.92deg at 34.93% 60.55%, #FF607C 0deg, #8626FF 318.75deg, #FF607C 360deg)',
            layoutBackground: 'radial-gradient(401.76% 401.76% at 50% -301.76%, #65AA80 0%, #62A480 54.45%, #2B2A70 100%)',
            contentBackground: '#fff',
            slogoBackground: 'linear-gradient(180deg, rgba(94, 33, 116, 0.43) 0%, #5E2174 199.57%)'
        },
        statusColor: {
            premium: 'linear-gradient(92.04deg, #FFE604 8.28%, #FFF9C8 14.83%, #FFE818 22.62%, #FFFACF 30%, #FFFACF 31.64%, #FFE818 55.82%, #FFFACF 73.44%, #FFE604 86.97%)',
            vip: 'linear-gradient(91.96deg, #DB8FFF 15.91%, #DE98FF 45.51%, #EBC0FF 57.23%, #DC91FF 68.33%, #E9BBFF 77.58%, #DA8BFF 88.06%)',
            common: 'rgba(114, 187, 255, 1)'
        },
        linkStyle: {
            pink: '#FF68B1',
        }
    },
});

export default theme;
