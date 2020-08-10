import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Modal, CardDeck, Image, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components.css";
import {Helmet} from "react-helmet";

//images
import german_sheperd from "../images/gs.jpeg";
import bulldog from "../images/bd.jpeg";
import rc from "../images/rc.jpg";



const user = {name: "Xi Liu", image: "https://firebasestorage.googleapis.com/v0/b/salon-b116e.appspot.com/o/images%2Fditto.jpeg?alt=media&token=098544b3-936e-44d5-a2c8-33e2704fca39"}

const pets = [
  {breed: "German Sheperd", age: 3, image: german_sheperd, gender: "male"},
  {breed: "Bulldog", age: 3, image: bulldog, gender: "male"},
  {breed: "Ragdoll", age: 3, image: rc, gender: "female" }
]

class Home extends Component {

  state = {
    currentIndex: 0,
    matches: [],
    profileVisibility: false,
    user: "",
    match: "",
    chatVisibility: false
  }

  componentDidMount() {
    this.setState({ user: user })
  }


  editProfile = () => {
    this.setState({ profileVisibility: true })
  }

  hideProfile = () => {
    this.setState({ profileVisibility: false })
  }

  swipeLeft = (e) => {
    e.preventDefault();
    console.log("swipe");
    if (this.state.currentIndex == pets.length - 1) {
      this.setState({ currentIndex: 0 });
    } 
    else {
      const temp = this.state.currentIndex;
      console.log(temp);
      this.setState({
        currentIndex: temp + 1
      })
    } 
  }

  swipeRight = (e) => {
    e.preventDefault();
    const helper = [...this.state.matches, pets[this.state.currentIndex]];
    this.setState({ matches: helper });
    if (this.state.currentIndex == pets.length - 1) {
      this.setState({ currentIndex: 0 });
    } 
    else {
      const temp = this.state.currentIndex;
      console.log(temp);
      this.setState({
        currentIndex: temp + 1
      })
    }
  }

  renderMatch = (match) => {
    return <Button style={{backgroundColor: "white" }} className="match-section" onClick={() => this.renderChat(match)}>
      <img src={match.image} style={{borderRadius: "50%", height: "70px", width: "70px", marginLeft: "20px" }}></img>
    </Button>
  }

  renderChat = (match) => {
   console.log("enter here");
    this.setState({
      match: match,
      chatVisibility: true
    })
    console.log("leave");
  }

  render() {
    return (
      <div>
        <div className="matches-container">

        <div className="profile-header">

          <img src={user.image} style={{ height: "50px", width: "50px", borderRadius: "50%", marginRight: "10px"}}></img>
          <div style={{}}>{user.name}</div>
   
          <Button style={{ backgroundColor: "lightgreen", float: "right", position: "relative"}} onClick={this.editProfile}>Edit Profile</Button>
        </div>

        <div className="matches">
          {this.state.matches && this.state.matches.map((match) => {
            return this.renderMatch(match);
          })}
        </div>
      </div>


      {this.state.chatVisibility ? <div>
        <div className="chat-window">

          <Button style={{float: "right", height: "5%"}} onClick={() => this.setState({chatVisibility: false})}>x</Button>
          
          <div className="chat-area">
            <div className="chat-content">
            </div>

            <textarea style={{height: "20%", width: "100%"}}></textarea>

            <div>
              <button style={{float: "right"}}>Send</button>
            </div>
          </div>

          <div className="match-info">
            <img src={this.state.match.image}></img>
            <div>Breed: {this.state.match.breed}</div>
            <div>Age: {this.state.match.age}</div>
          </div>
        </div>
      </div> 
      : null}


      <Modal show={this.state.profileVisibility} onHide={this.hideProfile}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  <form onSubmit={this.handleMessaging}>
                    <div style={{display: "flex"}}>
                      <span>First Name</span>
                      <input id="firstName"></input>

                    </div>

                    <div style={{display: "flex"}}>
                    
                      <span>Last Name</span>
                      <input id="lastName"></input>

                    </div>

                    <div style={{display: "flex"}}>
                    
                      <span>Email</span>
                      <input id="email"></input>
                    </div>

                  </form>
                </Modal.Body>
      </Modal>

      <div className="pet-container">
        <img src={pets[this.state.currentIndex].image} style={{width: "480px", height: "300px"}}></img>
        <div className="pet-info">
          <div>Breed: {pets[this.state.currentIndex].breed}</div>
          <div>Age: {pets[this.state.currentIndex].age}</div>
        </div>

        <button className="swipe-left" onClick={this.swipeLeft}>😒</button>
        <button className="swipe-right" onClick={this.swipeRight}>❤️</button>
        
      </div>
      </div>
    );
  }
}



export default withRouter(Home);