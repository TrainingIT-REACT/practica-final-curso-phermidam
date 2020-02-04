import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Css
import './App.css';

import Loader from "./common/Loader";
import ErrorBoundary from "./ErrorBoundary";

//Components
import Home from "./pages/home/Home";
import Album from "./pages/album/Album";
import History from "./pages/history/History";
import Player from "./pages/player/Player";
import User from "./pages/user/User";

const Menu = lazy(() => import('./common/Menu'));

class App extends Component {
  /*constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: []
    }
  }*/

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

  render() {
    return (
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
            <Router>
              <Menu />
              <div className="content">
                <Route path="/" exact component={Home} />
                <Route path="/album/:id" component={Album} />
                <Route path="/history" component={History} />
                <Route path="/player/:id" component={Player} />
                <Route path="/user/:id" component={User} />
              </div>
            </Router>
        </Suspense>
      </ErrorBoundary>
    );
  }
}

export default App;
