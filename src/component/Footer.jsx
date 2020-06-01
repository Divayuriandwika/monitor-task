import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';


// const list = {
//   listStyle: 'none',
// }

// const spacing = {
//   listStyle: 'none',
//   paddingTop: '10px',
// }

const useStyles = makeStyles((theme) => ({
  // Buat footernya nanti diatur-atur aja minHeight sama marginTopnya sesuai sama content bodynya 
  root: {
    display: 'flex',
    flexDirection: 'column',
    // minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    // marginTop: 'auto',
    marginTop: 0,
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      textAlign: 'center'
  }
}));

function Copyright() {
  return (
    <Typography variant="body2" align="center" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        DYD
      </Link>{' '}
      {new Date().getFullYear()}
      {'. All rights reserved.'} | <Link color="inherit" href="#">{'Term and Conditions'}</Link> | <Link color="inherit" href="#">{'Privacy Policy'}</Link>
    </Typography>
  );
}

function Cols() {
  return (
    <Grid container spacing={3} >
        <Grid item lg={12} md= {12} xs={12}>
          <Typography>
            PT. Prima Jaya Abadi Sejahtera
          </Typography>
        </Grid>
    </Grid>
  )
}

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Cols />
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
