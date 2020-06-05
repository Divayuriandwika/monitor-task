import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Logo from '../assets/green.jpeg'

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    height: 800,
  },
  media: {
    height: 300,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Logo}
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Employee's Name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Division :
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Assignment :
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Deadline :
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Phone Number
            </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}
