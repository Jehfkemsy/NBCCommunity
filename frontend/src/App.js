import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavbarC from './components/Navbar/NavbarC';
import HomePC from './pages/HomePage/HomePC';
import landingP from './pages/LandingPage/LandingP';
import './App.css';
import ShowPage from './pages/ShowPage/ShowPage';

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
            <div style={margin}>
              <Switch>
                <Route exact path="/" component={landingP} />
                <Route path="/home" component={HomePC} />

                <Route exact path="/show/:id" component={ShowPage} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
