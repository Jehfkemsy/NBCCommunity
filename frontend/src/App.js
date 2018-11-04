import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavbarC from './components/Navbar/NavbarC';
import HomePC from './pages/HomePage/HomePC';
import landingP from './pages/LandingPage/LandingP';
import './App.css';
import ResponseCard from './components/RespnseCard/ResponseCard';
import ShowPage from './pages/ShowPage/ShowPage';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import ShowPage from './pages/ShowPage/ShowPage';
import GQL from './components/graphql/Graph';

const client = new ApolloClient({
  uri: 'https://xyabwrrxxk.execute-api.us-east-1.amazonaws.com/stage',
  headers: { 'x-api-key': 'mX63Tp1jp4M3ExJyHutMqn3D7W9aN28lsJxWlV50' }
});

class App extends Component {
  render() {
    let margin = {
      marginTop: '10%'
    };
    return (
      <ApolloProvider client={client}>
        <GQL />
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
      </ApolloProvider>
    );
  }
}

export default App;
