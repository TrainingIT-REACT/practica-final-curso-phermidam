import React from 'react';
import './Menu.css';

import Nav from './Nav';
import MenuIcon from '@material-ui/icons/Menu';

import userImageSrc from "../assets/user.jpg";

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
        return <nav>
                <div className="menu">
                    <MenuIcon onClick={this.toggleNav}/>
                    <div className="navMenu">
                        <Nav open={this.state.openNav}>
                            <div className="close__nav" onClick={this.toggleNav}>&times;</div>
                        </Nav>
                    </div>
                </div>
                <div className="title">Reactify</div>
                <div className="user">
                    <a className="wrapper" href="/">
                        <div className="image">
                            <img src={userImageSrc} alt="Error al cargar la imagen" />
                        </div>
                        <div className="name">Nombre Apellido Apellido</div>
                    </a>
                </div>
            </nav>;
    }
}

export default Menu;