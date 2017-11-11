import React, { Component } from 'react';
import './App.css';
import Post from './Post.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardText} from 'material-ui/Card';




class App extends Component {

  constructor(){
    super();
    this.state={
      posts: []
    }
  }

  
  saveInStorage(){
    let actualSatage = this.state;
    actualSatage = JSON.stringify(actualSatage);
    localStorage.setItem(this.props.storageKey, actualSatage);

  }
  
  componentDidMount(){
    let state = localStorage.getItem(this.props.storageKey);
    state = JSON.parse(state);
    this.setState(state);
  }

  newPost(){
    const post = prompt('Digite aqui op texto do seu novo Post');
    let posts = this.state.posts;
    posts.push(post);
    this.setState({posts: posts});
    this.saveInStorage();
}
  render() {
      
    return (
      <MuiThemeProvider>
        <Card>
          <CardText>
          {this.state.posts.map(function(post,index){
                    return (<Post storageKey={'post' + index} text={post}/>);
                })}
          <FlatButton style={{backgroundColor: '#FF7256'}}label='Novo Post' onClick={this.newPost.bind(this)}/>
          
        </CardText>
        </Card>
      </MuiThemeProvider>
      
    );
  }
}

export default App;
