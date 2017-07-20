import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import PhotoIcon from 'material-ui-icons/Photo';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import Input from 'material-ui/Input/Input';

const styleSheet = createStyleSheet('CustomAppBar', {
  root: {
    width: '100%',
  },
  headerContainer: {
  	margin: '0 auto',	
  	maxWidth: '1100px',
  },
  flex: {
    flex: 1,
  },
  flex2: {
    flex: 2,
    color: '#fff',

  },
});

function CustomAppBar(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="static">
      	<div >
	        <Toolbar className={classes.headerContainer}>
	          <IconButton color="contrast" aria-label="Photo">
	            <PhotoIcon />
	          </IconButton>
	          <Typography type="title" color="inherit" className={classes.flex}>
	            React Instagram
	          </Typography>
	          <Input defaultValue="Hello" className={classes.flex2} />
	          <Button color="contrast">Login</Button>
	          <IconButton aria-label="Add to favorites">
	              <FavoriteIcon />
	            </IconButton>
	            <IconButton aria-label="Share">
	              <ShareIcon />
	            </IconButton>
	        </Toolbar>
	      </div>
      </AppBar>
    </div>
  );
}

CustomAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(CustomAppBar);