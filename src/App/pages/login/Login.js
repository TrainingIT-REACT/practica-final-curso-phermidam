import React, { createRef } from 'react';

import { Route, Redirect } from 'react-router-dom';

import './Login.css';

import UserContext from "../../contexts/UserContext";

class Login extends React.Component{
    userInput = createRef();

    render(){
        return <UserContext.Consumer>
            {({ signedIn, updateUser }) => {
                return <Route render={(props) =>
                    signedIn ? (
                        <Redirect to="/" />
                    ) : (
                        <div id="login">
                            <div className="contentForm">
                                <h1>REACTIFY</h1>
                                <div className="form">
                                    <div className="inputForm">
                                        <label htmlFor="user">Usuario</label>
                                        <input type="text" id="user" name="user" ref={this.userInput} placeholder="Introduce tu usuario" />
                                    </div>
                                    <div className="inputForm">
                                        <label htmlFor="password">Contraseña</label>
                                        <input type="password" id="password" name="password" placeholder="Introduce tu contraseña" />
                                    </div>
                                    <button onClick={() => updateUser(true, this.userInput.current.value)}>Entrar</button>
                                </div>
                            </div>
                        </div>
                    )
                } />
            }}
        </UserContext.Consumer>;
    }
}

export default Login;