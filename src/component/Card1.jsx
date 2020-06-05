import React from 'react';
import { lighten, makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Logo from '../assets/doctor.png'
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles({
    root: {
      height: 6,
      backgroundColor: lighten('#e0eeee', 0.5),
    },
    bar: {
      borderRadius: 20,
      backgroundColor: '#00bfff',
    },
  })(LinearProgress);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 150,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  line: {
    width: 100,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent style = {{ textAlign: "left", marginTop: 10, marginLeft: 10 }}>
            <img src={Logo} alt="" width= "40"/>
            <div>
            <p style = {{ textAlign: "left"}}>Client</p>
            </div>
        <BorderLinearProgress
        className={classes.line}
        variant="determinate"
        color="secondary"
        value={85}
        />
        </CardContent>
      </div>
      <CardMedia>
          <p style = {{ fontSize: 25}}>487</p>
      </CardMedia>
    </Card>
  );
}