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
import Divider from 'material-ui/Divider';
/* Custom components */
import MyCustomCard from './components/MyCustomCard';
import CustomAppBar from './components/CustomAppBar';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.loadData();
  }

  loadData(){
    fetch('./assets/fakeData.json')
    .then((res) => res.json())
    .then((data) => {
      console.log('data:', data);
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <CustomAppBar />
          <div className="container">
            <MyCustomCard title="This is the title" subheader="Ruine De Pompei, Naples" likes="426"/>
            <MyCustomCard title="This is the title" subheader="Ruine De Pompei, Naples" likes="132"/>
            <MyCustomCard title="This is the title" subheader="Ruine De Pompei, Naples" likes="7.215"/>
          </div>
        </div> 
      </MuiThemeProvider>
    );
  }
}

export default App;



