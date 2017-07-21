import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia, CardHeader } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';

const styleSheet = createStyleSheet('SimpleCard', theme => ({
  card: {
    minWidth: 275,
    margin: '0',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
}));

function SimpleCard(props) {
  const classes = props.classes;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            title={props.title}
            subheader={props.subheader}
        />
        <CardMedia>
          <img src="https://material-ui-1dab0.firebaseapp.com/build/abd50bc0e11052fea9669f18f0c017bc.jpg" alt="Contemplative Reptile" />
        </CardMedia>
        <CardContent>
          <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
          <Typography type="body1" className={classes.title}>
            {props.likes} likes
          </Typography>
          <Typography type="headline" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography type="body1" className={classes.pos}>
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.<br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense>Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(SimpleCard);