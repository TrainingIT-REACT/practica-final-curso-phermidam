import React from "react";

// Css
import './Albums.css';

class Albums extends React.Component{
    render(){
        let items = this.props.data.map((album, i) => 
            <div className="album" key={i}>
                <div className="img">
                    <img src={album.cover} alt="Imagen del álbum" title="Imagen del álbum" />
                </div>
                <div className="title">{album.name}<br/><i>{album.artist}</i></div>
            </div>
        );

        return <div className="content">
            <h2>Álbumes más escuchados</h2>
            <div className="albums">{items}</div>
        </div>;
    }
}

export default Albums;