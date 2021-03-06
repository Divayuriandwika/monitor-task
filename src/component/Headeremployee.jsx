import React, {useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Header3 from './Header3'
import {useDispatch, useSelector} from 'react-redux'
import {getName} from '../redux/actions/usersAction'

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    backgroundColor: '#329da8',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
    color: 'white',
    
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: 'white'
  },
  logo : {
    maxWidth: 30,
    margin: 5
  },
}));



export default function Pricing() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const userName = useSelector((state) => state.userID);
  
  useEffect(() => {
		const userID = localStorage.getItem('id');
		if (userID) {
			dispatch(getName(userID));
    }
    console.log(userID);
  }, []);

  console.log('test')
  console.log(userName);
  

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="sticky"  elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6"  noWrap className={classes.toolbarTitle}>
            PT. PRIMA
          </Typography>

          <Header3/>
    
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}