import React, { Component } from 'react';
import './App.css';
import Post from './Post.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




class App extends Component {

 
  
  render() {
      
    return (
      <MuiThemeProvider>
        <div style={{padding: 30, backgroundColor: '#DDDDDD'}}>
          <Post storageKey={'post1'} text={'Ola humanos'}/>

          <Post storageKey={'post2'} text={'Outro post'}/>
        </div>
      </MuiThemeProvider>
      
    );
  }
}

export default App;
