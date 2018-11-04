import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavbarC from './components/Navbar/NavbarC';
import HomePC from './pages/HomePage/HomePC';
import landingP from './pages/LandingPage/LandingP';
import './App.css';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://xyabwrrxxk.execute-api.us-east-1.amazonaws.com/stage',
  headers: { 'x-api-key': 'mX63Tp1jp4M3ExJyHutMqn3D7W9aN28lsJxWlV50' }
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
            <div >
            <NavbarC />
              <Switch>
                <Route exact path="/" component={landingP} />
                <Route path="/home" component={HomePC} />
              </Switch>
            </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
