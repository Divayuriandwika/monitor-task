import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Footer from "../component/Footer"
import Header from "../component/Header"
import Logo from '../assets/manager.png'
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Logo1 from '../assets/work.png'
import Logo2 from '../assets/time.png'
import Logo3 from '../assets/teamwork.png'
import {useDispatch} from 'react-redux'
import {addTask} from '../redux/actions/assignmentAction'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        // paddingTop: theme.spacing(4),
        paddingLeft: 0,
        paddingRight: 0,
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 720,
    },
    paper2: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        alignItems: 'center'
    },
    paper3: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        color: 'white',
        // backgroundColor: 'black',
    },
    paper4: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 250,
        borderRadius: 5,
            },
}));

export default function Dashboard() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const dispatch = useDispatch()

    return (
        <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>

                <Container maxWidth="0" className={classes.container}>
                <Header/>
                    <div style={{ backgroundColor: '#d15a5a', paddingBottom: 70}}>
                         <img src="" alt=""/>
                            <Grid container spacing={3} justify='center' style={{marginTop:80}}>
                                <Grid item xs={12} md={3} lg={2}>
                                    <div className={classes.paper2}>
                                        <img src={Logo} alt="" style={{maxWidth: 200}}/>
                                    </div>
                                </Grid>

                                <Grid item xs={12} md={5} lg={3}>
                                    <div className={classes.paper3}>
                                        <Typography variant='h3' style={{marginTop: 15}}>
                                            Welcome Leader!
                                        </Typography>
                                        <br/>
                                        <Typography variant='h5'>        
                                            Start managing assignment and time for your team.
                                        </Typography>
                                        <Typography variant='h5'>        
                                            Build your team. Be a good leader.
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>

                                <Grid container spacing={3} justify='center' style={{ marginTop: 70,  }}>
                                <Grid item xs={12} md={3} lg={3} >
                                    <Box
                                        boxShadow={10}
                                        bgcolor="background.paper"
                                        m={1}
                                        p={1}
                                        className={classes.paper4}
                                        alignItems='center'
                                    >
                                        <img src={Logo1} alt="" style={{maxWidth: 60, marginTop: 20}}/>
                                        <Typography style={{ fontSize: 20, marginTop: 10}}>
                                            Professional at work
                                        </Typography >
                                        <Typography style={{ fontSize: 15, textAlign: 'center'}}>                                   
                                            Professional attitude must be possessed by every employee. Employees who have a professional attitude in their work can be relied on by the company.
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} md={3} lg={3}>
                                <Box
                                        boxShadow={10}
                                        bgcolor="background.paper"
                                        m={1}
                                        p={1}
                                        className={classes.paper4}
                                        alignItems='center'
                                    >
                                        <img src={Logo2} alt="" style={{maxWidth: 60, marginTop: 20}}/>
                                        <Typography style={{ fontSize: 20, marginTop: 10}}>
                                            Time Management
                                        </Typography >
                                        <Typography style={{ fontSize: 15, textAlign: 'center'}}>
                                        Time management is something you cannot ignore, especially to develop a career. Good time management leads to increased efficiency and productivity.
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} md={3} lg={3} >
                                <Box
                                        boxShadow={10}
                                        bgcolor="background.paper"
                                        m={1}
                                        p={1}
                                        className={classes.paper4}
                                        alignItems='center'
                                    >
                                        <img src={Logo3} alt="" style={{maxWidth: 60, marginTop: 20}}/>
                                        <Typography style={{ fontSize: 20, marginTop: 10}}>
                                            Teamwork
                                        </Typography >
                                        <Typography style={{ fontSize: 15, textAlign: 'center'}}>
                                        Teamwork can improve work efficiency, have many creative ideas, workloads become lighter, strengthening each other in difficult times and advancing the company.
                                        </Typography>
                                    </Box>
                                </Grid>
                                </Grid>        
                    </div>
              

                    <Grid container spacing={3} justify='center' style={{ marginBottom: 50, marginTop: 70}}>
                        <Grid item xs={12} md={12} lg={10} >
                            <Paper className={fixedHeightPaper}>

                            </Paper>
                        </Grid>
                    </Grid>
                            <Footer />
                </Container>
            </main>
        </div>
    );
}