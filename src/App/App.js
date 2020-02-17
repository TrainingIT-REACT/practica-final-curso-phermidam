import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

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

//Contexts
import UserContext from './contexts/UserContext';

//Actions
import { login } from './store/actions/user';

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

  updateUser(signedIn, username) {
    this.props.login(username);
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

const mapDispatchToProps = (dispatch) => ({
  login: (content) => dispatch(login(content))
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(App);