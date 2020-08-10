import React, { Component } from 'react';
import Home from './home.js';
import Authentication from './authentication.js';
import { Switch, Route } from 'react-router-dom';


class Main extends Component {

  render() {
   
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Authentication} /> 
          <Route path='/home' component={Home} />
        
        </Switch>
      </div>
    );
  }
}


export default Main;