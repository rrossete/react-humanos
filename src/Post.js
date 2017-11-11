import React, { Component } from 'react';
import './App.css';
import {Card, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';



class Post extends Component {

  constructor(){
    super();
    this.state={
      name: 'Rodolpho',
      likes: 0,
      isFavorite: false,
      comments: ['Olá']

    }
  }

  componentDidMount(){
    let state = localStorage.getItem(this.props.storageKey);
    state = JSON.parse(state);
    this.setState(state);
  }

    giveLike(){
      let numLikes = this.state.likes;
      numLikes = numLikes +1;

      const newState = {
        likes: numLikes
      }
      this.setState(newState);

      this.saveInStorage();
    }

    setFavorite(){
      let favorite = this.state.isFavorite;
      favorite = !favorite;
      this.setState({isFavorite: favorite});

      this.saveInStorage();
    }

    newComment(){
      let comments = this.state.comments;
      const newComment = prompt('Digete seu comentario');

      comments.push(newComment);

      this.setState({comments: comments});
      this.saveInStorage();
    }

    saveInStorage(){
      let actualSatage = this.state;
      actualSatage = JSON.stringify(actualSatage);
      localStorage.setItem(this.props.storageKey, actualSatage);

    }

  
  
  render() {
    let favoriteText = 'FAVORITO';

    if(this.state.isFavorite)
      {
        favoriteText = 'REMOVER DOS FAVORITOS';

      }else{
        favoriteText = 'FAVORITO';
      } 
      
    return (
      <Card style={{marginBottom:30,backgroundColor:'#DDDDFF'}}>
        <CardText  >
            <h1>{this.props.text}</h1>
            <h2> 
            {this.state.name}
            </h2>
            <h4>{'Likes: ' +  this.state.likes}</h4>

            <FlatButton style={{backgroundColor: "#a4c639", marginRight:15}} label={'Like'} onClick={this.giveLike.bind(this)}/>
            
            <FlatButton style={{backgroundColor: "#99AAAA", marginRight:15}} label={favoriteText}  onClick={this.setFavorite.bind(this)}/>
      
            <FlatButton style={{backgroundColor: "#FFFFFF", marginRight:15}} label={'Comentar'} onClick={this.newComment.bind(this)} />

            <div >
                {this.state.comments.map(function(text,index){
                    return (<h4 style={{padding: 15, backgroundColor: 'white'}} key={index}> {text} </h4>);
                })}
            </div>
        </CardText>
      </Card>
    );
  }
}

export default Post;
