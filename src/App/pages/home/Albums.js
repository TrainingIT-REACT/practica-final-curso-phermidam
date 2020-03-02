import React from "react";

import {Link} from "react-router-dom";

// Css
import './Albums.css';

class Albums extends React.Component{
    render(){
        let items = this.props.data.map((album, i) => 
            <Link to={'/album/'+album.id} className="album" key={album.id}>
                <div className="img">
                    <img src={"http://localhost:3001"+album.cover} alt="Imagen del álbum" title="Imagen del álbum" />
                </div>
                <div className="title">{album.name}<br/><i>{album.artist}</i></div>
            </Link>
        );

        return <div className="content">
            <h2>Álbumes más escuchados</h2>
            <div className="albums">{items}</div>
        </div>;
    }
}

export default Albums;