import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Css
import './App.css';

import Loader from "./common/Loader";
import ErrorBoundary from "./ErrorBoundary";

//Components
import PrivateRoute from "./common/PrivateRoute";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Album from "./pages/album/Album";
import History from "./pages/history/History";
import Player from "./pages/player/Player";
import User from "./pages/user/User";

import UserContext from './contexts/UserContext';

const Menu = lazy(() => import('./common/Menu'));

class App extends Component {
  constructor(props) {
    super(props);

    this.updateUser = this.updateUser.bind(this);

    this.state = {
      signedIn: false,
      updateUser: this.updateUser,
      /*loading: true,
      albums: []*/
    }
  }

  /*async componentDidMount() {
    try {
      const res = await fetch('/albums');
      const json = await res.json();
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        albums: json
      }));
    } catch(err) {
      console.error("Error accediendo al servidor", err);
    }
  }*/

  updateUser(signedIn) {
    this.setState(() => ({ signedIn }));
  }

  render() {
    return (
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
            <Router>
              <UserContext.Provider value={this.state}>
                <Menu visible={this.state.signedIn}/>
                <div className="content">
                  <Route path="/login" component={Login}/>
                  <PrivateRoute path="/" exact component={Home} />
                  <PrivateRoute path="/album/:id" component={Album} />
                  <PrivateRoute path="/history" component={History} />
                  <PrivateRoute path="/player/:id" component={Player} />
                  <PrivateRoute path="/user/:id" component={User} />
                </div>
              </UserContext.Provider>
            </Router>
        </Suspense>
      </ErrorBoundary>
    );
  }
}

export default App;
