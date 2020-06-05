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
import Logo from '../assets/foldertosca.png'
import Logo1 from '../assets/officetosca.png'
import Logo2 from '../assets/codetosca.png'
import Logo3 from '../assets/designtosca.png'
import Logo4 from '../assets/laptoptosca.png'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Logojs from '../assets/js.png'
import Logort from '../assets/react2.png'
import Logorx from '../assets/redux2.png'
import Logomo from '../assets/mongo.png'
import Logois from '../assets/isyana.jpg'
import Logoek from '../assets/eka.jpeg'
import Logohu from '../assets/husein.jpeg'
import Divider from '@material-ui/core/Divider';


const list = {
    listStyle: 'none',
  }

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
        cursor: 'pointer',
        position: 'relative',
        '&:hover' : {
            transform: 'scale(1.1)',
        },
        alignItems: 'center',
        justifyContent: 'center'
    },
    fixedHeight: {
        height: 300,
    },
    paper2: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        alignItems: 'center',
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
                
                <div  style={{ backgroundColor: '#329da8', minHeight: 300}}>
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
                           

                                <Grid container spacing={0} justify='center' style={{ marginTop: 50}}>

                                <Grid item xs={12} md={4} lg={2} >
                                        <Paper className={fixedHeightPaper}>
                                            <img src={Logo} alt="" style={{ maxWidth: 80}}/>
                                            <br/>
                                            <Typography>
                                                Your Assignment
                                            </Typography>
                                        </Paper>
                                </Grid>

                                <Grid item xs={12} md={4} lg={2} >
                                        <Paper className={fixedHeightPaper}>
                                        <img src={Logo1} alt="" style={{ maxWidth: 80}}/>
                                        <br/>
                                            <Typography>
                                                Office
                                            </Typography>
                                        </Paper>
                                </Grid>

                                <Grid item xs={12} md={4} lg={2} >
                                        <Paper className={fixedHeightPaper}>
                                        <img src={Logo2} alt="" style={{ maxWidth: 80}}/>
                                        <br/>
                                            <Typography>
                                                Frontend / Backend
                                            </Typography>
                                        </Paper>
                                </Grid>

                                <Grid item xs={12} md={4} lg={2} >
                                        <Paper className={fixedHeightPaper}>
                                        <img src={Logo3} alt="" style={{ maxWidth: 80}}/>
                                        <br/>
                                            <Typography>
                                               UI / UX
                                            </Typography>
                                        </Paper>
                                </Grid>

                                <Grid item xs={12} md={4} lg={2} >
                                        <Paper className={fixedHeightPaper}>
                                        <img src={Logo4} alt="" style={{ maxWidth: 80}}/>
                                        <br/>
                                            <Typography>
                                                Hardware / Software
                                            </Typography>
                                        </Paper>
                                </Grid>
                                </Grid> 


                                <Grid container spacing={0} justify='center' style={{ marginTop: 100}}>
                                    <Grid item xs={12} md={3} lg={3}>
                                    <div> 
                                    <Typography style={{ fontSize: 25, marginBottom: 10}}>
                                        Knowledge Center
                                    </Typography>
                                    </div>
                                    <Grid>
                                        <Paper className={classes.paper} style={{ height: 104}}>
                                        <ListItem>
                                            <ListItemAvatar>
                                            <Avatar>
                                                <img src={Logojs} alt=""/>
                                            </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Javascript" secondary="JavaScript is the programming language of..." />
                                        </ListItem>
                                        </Paper>
                                    </Grid>

                                    <Grid>
                                        <Paper className={classes.paper} style={{ height: 104}}>
                                        <ListItem>
                                            <ListItemAvatar>
                                            <Avatar>
                                            <img src={Logort} alt=""/>
                                            </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="React" secondary="React makes it painless to create interactive UIs..." />
                                        </ListItem>
                                        </Paper>
                                    </Grid>

                                    <Grid>
                                        <Paper className={classes.paper} style={{ height: 104}}>
                                        <ListItem>
                                            <ListItemAvatar>
                                            <Avatar>
                                            <img src={Logorx} alt=""/>
                                            </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Redux" secondary="Redux helps you write applications that..." />
                                        </ListItem>
                                        </Paper>
                                    </Grid>

                                    <Grid>
                                        <Paper className={classes.paper} style={{ height: 104}}>
                                        <ListItem>
                                            <ListItemAvatar>
                                            <Avatar>
                                            <img src={Logomo} alt=""/>
                                            </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="MongoDB" secondary="MongoDB is a document database, which means..." />
                                        </ListItem>
                                        </Paper>
                                    </Grid>
                                    </Grid>

                                    <Grid item xs={1} md={1} lg={1}> 
                                    <Grid>
                                        <Paper >
                                            {/* pembatas */}
                                        </Paper>
                                    </Grid>
                                    </Grid>
                                

                                    <Grid item xs={12} md={3} lg={3}> 
                                    <Typography style={{ fontSize: 25, marginBottom: 10}}>
                                        Chat with your team
                                    </Typography>
                                    <Grid>
                                        <Paper className={classes.paper} style={{ height: 138}}>
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar>
                                            <Avatar alt="" src={Logois} />
                                            </ListItemAvatar>
                                            <ListItemText
                                            primary="Already pushed in my branch"
                                            secondary={
                                                <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    Isyana
                                                </Typography>
                                                {" — I have already pushed register and login validation…"}
                                                </React.Fragment>
                                            }
                                            />
                                             </ListItem>
                                             {/* <Divider variant="inset" component="li" /> */}
                                        </Paper>
                                    </Grid>

                                    <Grid>
                                        <Paper className={classes.paper} style={{ height: 138}}>
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar>
                                            <Avatar alt="" src={Logoek} />
                                            </ListItemAvatar>
                                            <ListItemText
                                            primary="Design our web"
                                            secondary={
                                                <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    Eka
                                                </Typography>
                                                {" — I think our web design still needs to…"}
                                                </React.Fragment>
                                            }
                                            />
                                             </ListItem>
                                        </Paper>
                                    </Grid>

                                    <Grid>
                                        <Paper className={classes.paper} style={{ height: 138}}>
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar>
                                            <Avatar alt="" src={Logohu} />
                                            </ListItemAvatar>
                                            <ListItemText
                                            primary="Still working on redux"
                                            secondary={
                                                <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    Husein
                                                </Typography>
                                                {" — I am still working on redux and…"}
                                                </React.Fragment>
                                            }
                                            />
                                             </ListItem>
                                        </Paper>
                                    </Grid>
                                    </Grid>

                                    <Grid item xs={1} md={1} lg={1}> 
                                    <Grid>
                                        <Paper >
                                            {/* pembatas */}
                                        </Paper>
                                    </Grid>
                                    </Grid>

                                    <Grid item xs={12} md={3} lg={2}> 
                                    <Grid>
                                        <Paper className={classes.paper2} style={{ marginTop:45, height: 200}}>
                                        <h3>PT. Prima Teknologi</h3>
                                        <li style={list}>Jl. Kemang Raya No.123</li>
                                        <li style={list}>Jakarta Selatan</li>
                                        <li style={list}>(021) 987-6543</li>
                                        <li style={list}>prima@gmail.com</li>

                                        </Paper>
                                    </Grid>
                                    </Grid>
                                </Grid>
                       <div style={{marginTop: 100}}>
                     <Footer/>
                    </div>         
                </Container>
            </main>
        </div>
    );
}