import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavbarC from './components/Navbar/NavbarC';
import HomePC from './pages/HomePage/HomePC'

import './App.css';

class App extends Component {
  render() {
    let margin = {
      marginTop: "10%"
    };
    return (
      <div>
       <BrowserRouter>
          <div className="App">
            <NavbarC />
            <div style={margin}>
              <Switch>
                <Route exact path="/" component={HomePC} />                           
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
