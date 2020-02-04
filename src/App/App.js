import React, { Component, Suspense, lazy } from 'react';

// Css
import './App.css';

import Loader from "./common/Loader";
import ErrorBoundary from "./ErrorBoundary";

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
          <Menu />
          <div className="content">
            El contenido de la app va aquí
          </div>
        </Suspense>
      </ErrorBoundary>
    );
  }
}

export default App;
