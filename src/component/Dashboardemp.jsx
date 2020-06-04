import React from 'react';
import clsx from 'clsx';
import { makeStyles, fade } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Footer from "../component/Footer"
import Header from "../component/Headeremployee"
import Card from "../component/Cardemp"
import { Paper, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Logo from '../assets/calendarwhite.png'
import Logo1 from '../assets/worktosca.png'
import Logo2 from '../assets/timetosca.png'
import Logo3 from '../assets/teamworktosca.png'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';

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
        height: 700,
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
        alignItems: 'center'
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
    search: {
        // position: 'relative',
        borderRadius: 50,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginTop: 20,
        // marginLeft: 20,
        // marginRight: 20,
        // marginRight: theme.spacing(2),
        // marginLeft: 0,
        // marginTop: 20,
        // left: 0,
        // right: 0,
        // width: 500,
        // [theme.breakpoints.up('sm')]: {
        //   marginLeft: theme.spacing(3),
        //   width: 'auto',
        // },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
}));

export default function Dashboard() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>

                <Container maxWidth="0" className={classes.container}>
                <Header/>
                
                <div  style={{ backgroundColor: '#329da8', position: 'absolute', left: 0, right: 0, minHeight: 300}}>
                         <img src="" alt=""/>
                            <Grid container spacing={3} justify='center'>
                                <Grid item xs={12} md={6} lg={4}>
                                    <div className={classes.paper3}>
                                        <Typography variant='h3' >
                                            Hello !
                                        </Typography>
                                        <Typography variant='h5'>        
                                        Welcome to the IT portal
                                        </Typography>

                                        <InputBase
                                            placeholder= 'Search...'
                                            fullWidth
                                            className={classes.search}
                                            variant='outlined'
                                           
                                        />
                                       
                                    </div>
                                </Grid>
                            </Grid>
                            </div>
                           

                                <Grid container spacing={3} justify='center' style={{ position: "absolute", marginTop: 200}}>
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

                                <Grid  item xs={12} md={12} lg={12}>
                                <Footer/>
                                </Grid>
                                </Grid>        
                   


                    {/* <Grid container spacing={3} 
                    style={{ marginBottom: 50, marginTop: 70}}
                    >
                         <Grid item xs={12} md={12} lg={3} >
                            <Paper >

                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={12} lg={6} >
                            <div className={fixedHeightPaper}>
                            <Card/>
                            </div>
                        </Grid>

                        <Grid item xs={12} md={12} lg={3} >
                            <Paper >
                    
                            </Paper>
                        </Grid>
                    </Grid> */}
                </Container>
            </main>
        </div>
    );
}