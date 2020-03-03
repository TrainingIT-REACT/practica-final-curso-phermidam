import React from "react";

import userImageSrc from "../../assets/user.jpg";

import "./User.css";

let user ={
    id: 1,
    name: "Pablo",
    lastname: "Hermida Mourelle",
    nick: "p.hermidam"
}

class User extends React.Component{
    render(){
        return <div id="user" className="content">
            <div className="header">
                <div className="image">
                    <img src={"/"+userImageSrc} title="Imagen de usuario" alt="Error al cargar la imagen" />
                </div>
                <h1 className="name">{user.name} {user.lastname}</h1>
            </div>
            <div className="data">
                <h2>Datos personales</h2>
                <div className="id"><strong>ID:</strong> {user.id}</div>
                <div className="nick"><strong>Nick:</strong> {user.nick}</div>
            </div>
        </div>
    }
}

export default User;