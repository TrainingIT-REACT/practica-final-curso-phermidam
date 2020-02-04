import React from "react";
import ReactDOM from "react-dom";
import "./Nav.css";

const navNode = document.getElementById("nav");

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.el = document.createElement("div");
        this.el.classList.add("navMenu");
        this.el.classList.add("hidden");
    }


    componentDidMount() {
        navNode.appendChild(this.el);
    }
    
    componentWillUnmount() {
        navNode.removeChild(this.el);
    }

    render() {
        if (this.props.open !== true) {
            this.el.classList.add("hidden");
            navNode.classList.add("hidden");
            return null;
        }
    
        this.el.classList.remove("hidden");
        navNode.classList.remove("hidden");
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}

export default Nav;