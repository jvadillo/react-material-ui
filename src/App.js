/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;*/

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';

import MyCustomCard from './components/MyCustomCard';
import CustomAppBar from './components/CustomAppBar';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <CustomAppBar />
          <div className="container">
            <MyCustomCard />
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
            
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <Button>
              Hello World
            </Button>
            <div>
              <Grid container gutter={24}>
                <Grid item xs>
                  <Paper>xs</Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper>xs=6</Paper>
                </Grid>
                <Grid item xs>
                  <Paper>xs</Paper>
                </Grid>
              </Grid>
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Drafts" />
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem button>
                  <ListItemText primary="Trash" />
                </ListItem>
                <ListItem button component="a" href="#simple-list">
                  <ListItemText primary="Spam" />
                </ListItem>
              </List>
            </div>
          </div>
        </div> 
      </MuiThemeProvider>
    );
  }
}

export default App;



