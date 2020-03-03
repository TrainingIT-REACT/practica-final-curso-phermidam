import React from 'react';
import { connect } from 'react-redux';

import './Menu.css';

import Nav from './Nav';
import MenuIcon from '@material-ui/icons/Menu';

import userImageSrc from "../assets/user.jpg";

import {Link} from "react-router-dom";

class Menu extends React.Component{
    constructor(props){
        super(props);

        this.toggleNav = this.toggleNav.bind(this);

        this.state = {
            openNav: false
        };
    }

    toggleNav() {
        this.setState(state => ({
            openNav: !state.openNav
        }));
    }

    render(){
        if(!this.props.visible) return <Nav open={false}></Nav>;
        return <nav>
                <div className="menu">
                    <MenuIcon onClick={this.toggleNav}/>
                    <div className="navMenu">
                        <Nav open={this.state.openNav}>
                            <div className="close__nav" onClick={this.toggleNav}>&times;</div>
                            <div className="content">
                                <div className="user">
                                    <Link className="wrapper" to="/user/1">
                                        <div className="image">
                                            <img src={"/"+userImageSrc} alt="Error al cargar la imagen" />
                                        </div>
                                        <div className="name">{this.props.user.user.username}</div>
                                    </Link>
                                </div>
                                <div className="links-menu">
                                    <Link to="/">Inicio</Link>
                                    <Link to="/history">Historial</Link>
                                </div>
                            </div>
                        </Nav>
                    </div>
                </div>
                <div className="title">
                    <Link to="/">Reactify</Link>
                </div>
                <div className="user">
                    <Link className="wrapper" to="/user/1">
                        <div className="image">
                            <img src={userImageSrc} alt="Error al cargar la imagen" />
                        </div>
                        <div className="name">{this.props.user.user.username}</div>
                    </Link>
                </div>
            </nav>;
    }
}

const mapStateToProps = (state) => {
    return {
        user: state
    }
}

export default connect(
    mapStateToProps,
    null,
  )(Menu);