import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import './Login.css';

import UserContext from "../../contexts/UserContext";

class Login extends React.Component{
    render(){
        return <UserContext.Consumer>
            {({ signedIn, updateUser }) => {
                return <Route render={(props) =>
                    signedIn ? (
                        <Redirect to="/" />
                    ) : (
                        <div id="login">
                            <div className="contentForm">
                                <div className="form">
                                    <div className="inputForm">
                                        <label>E-mail</label>
                                        <input type="email" name="email" placeholder="Introduce tu email" />
                                    </div>
                                    <div className="inputForm">
                                        <label>Contraseña</label>
                                        <input type="password" name="password" placeholder="Introduce tu contraseña" />
                                    </div>
                                    <button onClick={() => updateUser(true)}>Entrar</button>
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