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
  white : {
  	backgroundColor: '#fff',
  	color: '#000',
  },
  headerContainer: {
  	height: '76px',
  	margin: '0 auto',	
  	maxWidth: '1100px',
  	justifyContent: 'space-between',
  },
  logoIcon: {
  	paddingRight: '14px',
  	marginRight: '14px',
    fontSize: '36px',
    borderRight: '1px solid #dbdbdb',
    display: 'inline-flex',
  },
  flex: {
    fontFamily: 'Pacifico,cursive',
    fontSize: '32px',
    display: 'inline-flex',
  },
  flex2: {
    color: '#000',
	minWidth: '220px',
  },
});

function CustomAppBar(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar className={classes.white} position="static">
      	<div >
	        <Toolbar className={classes.headerContainer}>
	        	<div>
	        	  <Typography type="title" color="inherit" className={classes.logoIcon}>
		            <i className='fa fa-instagram'></i>
		          </Typography>
		          <Typography type="title" color="inherit" className={classes.flex}>
		            React Instagram
		          </Typography>
		        </div>
		                
	          	<Input defaultValue="Find..." className={classes.flex2} />
	          	<div>
		          	<Button color="contrast">Login</Button>
		          	<IconButton aria-label="Add to favorites">
		              <FavoriteIcon />
		            </IconButton>
		            <IconButton aria-label="Share">
		              <ShareIcon />
		            </IconButton>
		        </div>
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