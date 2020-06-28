import React, {useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Header2 from './Header2'
import {useDispatch, useSelector} from 'react-redux'
import {getAllTask} from '../redux/actions/assignmentAction'



const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    backgroundColor: '#d15a5a',
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
  const assignment = useSelector((state) => state.taskID);
  
  useEffect(() => {
		// const taskID = localStorage.getItem('id');
		// if (taskID) {
			dispatch(getAllTask());
    // }
    // console.log(taskID);
  }, []);

  console.log('test')
  // console.log(assignment);
  

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="sticky"  elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6"  noWrap className={classes.toolbarTitle}>
            PT. PRIMA
          </Typography>

          <Header2/>
    
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}