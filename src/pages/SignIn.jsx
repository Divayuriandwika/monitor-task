import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import { Formik } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../assets/office1.gif'
import Avatar from "@material-ui/core/Avatar";
import Logo2 from '../assets/green.jpeg'
import Logo3 from '../assets/boy3.JPG'
import {useDispatch} from 'react-redux'
import {loginUser} from '../redux/actions/signinAction'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        // backgroundColor: 'lightblue',
        backgroundImage: `url(${Logo2})`,
        
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
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(4),
       
    },
    paper: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    fixedHeight: {
        height: 700,
    },
    paper2: {
        // padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        height: 700,
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        margin: 20,
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const history = useHistory();
    const dispatch = useDispatch()

    return (
        <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="0" className={classes.container}>
                    <Grid container spacing={0} justify='center'>

                    <Hidden smDown>
                        <Grid item xs={12} md={8} lg={6} >
                            <Paper className={classes.paper2} >
                            <img src={Logo} alt="" className={classes.paper2}/>
                            </Paper>
                        </Grid>
                    </Hidden>

                        <Grid item xs={12} md={4} lg={3} >
                            <Paper className={fixedHeightPaper}>
                            <Typography
									component="h1"
									variant="h5"
									style={{ fontFamily: 'Fredoka One, cursive', color: '#6C5434' }}
								>
									Sign In
								</Typography>

                                     <Avatar alt="Remy Sharp" src={Logo3} className={classes.large} />

								<Formik
									initialValues={{
										email: '',
										password: ''
									}}
									validate={(values) => {
										const errors = {};
										if (!values.email) {
											errors.email = 'Required';
										} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
											errors.email = 'Invalid email address';
										}

										if (!values.password) {
											errors.password = 'Required';
										}

										return errors;
									}}
									onSubmit={async(values) => {
										// await dispatch(loginUser(values));
                                        // await history.push('/dashemp');
                                        dispatch(loginUser(values, history))
                                        // console.log(values);
                                        
									}}
								>
									{({ handleChange, handleSubmit, values, isSubmitting, errors, touched }) => {
										return (
											<form className={classes.form} noValidate onSubmit={handleSubmit}>
												<TextField
													// variant="outlined"
													margin="dense"
													required
													fullWidth
													id="email"
													label="Email Address"
													name="email"
													autoComplete="email"
													onChange={handleChange}
													values={values.email}
                                                    size="small"
                                                    style={{ marginTop: 20, marginBottom: 15}}
												/>
												<TextField
                                                    // variant="outlined"
                                                    style={{ marginBottom: 20}}
													margin="dense"
													required
													fullWidth
													name="password"
													label="Password"
													type="password"
													id="password"
													autoComplete="current-password"
													onChange={handleChange}
													values={values.password}
													size="small"
												/>
												<Button
													type="submit"
													fullWidth
													variant="contained"
													color="inherit"
													disabled={isSubmitting}
													style={{
														borderRadius: '3px',
														fontFamily: 'Roboto, sans-serif',
														backgroundColor: '#d15a5a',
														color: '#6C5434',
														marginTop: '10px'
													}}
												>
													<b>Sign In</b>
												</Button>
                                                </form>
										);
									}}
								</Formik>
												<Typography
													component="h3"
													variant="subtitle2"
                                                    style={{ paddingTop: '16px' }}
                                                    
												>
													<i justify='center'>Not have an account yet?</i>
                                                    <br/>
												
												<Link
													color="inherit"
													style={{
														fontFamily: 'Roboto, sans-serif',
														color: '#6C5434'
													}}
													to="/sign-up"
												>
													<i>Click here to Sign Up</i>
												</Link>
                                                </Typography>
                            </Paper>
                        </Grid>

                    </Grid>
                </Container>
            </main>
        </div>
    );
}