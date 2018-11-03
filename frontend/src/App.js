import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavbarC from './components/Navbar/NavbarC';
import HomePC from './pages/HomePage/HomePC';
import landingP from './pages/LandingPage/LandingP';
import './App.css';
import ResponseCard from './components/RespnseCard/ResponseCard';

class App extends Component {
  render() {
    let margin = {
      marginTop: '10%'
    };
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <NavbarC />
            <ResponseCard />
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
