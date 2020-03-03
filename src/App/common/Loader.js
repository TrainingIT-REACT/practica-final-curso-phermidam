import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

import "./Loader.css";

class Loader extends React.Component{
    render() {
        return <div id="loading">
                <CircularProgress />
            </div>
    }
}

export default Loader;