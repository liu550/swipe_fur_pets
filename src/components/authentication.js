import React, { Component } from 'react';
import { Button, Card, CardDeck, Image, Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class Authentication extends Component {

    state = {
        signUp: true
    }

    switchToSignUp = () => {
       
        this.setState({ signUp: true });
    }

    switchToLogIn = () => {
        
        this.setState({ signUp: false });
    }

    render() {

        return (
            <div>


            <div>
                {this.state.signUp ? 
                <form>
                    <span>First Name</span>
                    <input></input>

                    <span>Last Name</span>
                    <input></input>

                    <span>Email</span>
                    <input></input>

                    <span>Password</span>
                    <input></input>

                    <Button type="submit" variant="success" onClick={() => this.props.history.push("/home")}></Button>
                </form>

                :

                <form>
                    <span>Email</span>
                    <input></input>

                    <span>Password</span>
                    <input></input>

                    <Button type="submit" variant="success" onClick={() => this.props.history.push("/home")}></Button>
                </form>
                }
                
            </div>
            <div style={{display: "flex"}}>
                <Button variant={this.state.signUp ? "success" : "light"} onClick={() => this.switchToSignUp}>Sign up</Button>
                <Button variant={this.state.signUp ? "light" : "success"} onClick={() => this.switchToLogIn}>Log in</Button>
            </div>

            </div>

        );
    }
}

export default withRouter(Authentication);