import React from "react";
import { connect } from "react-redux";

import { getSongsByAlbum } from '../../store/actions/albums';
import { getAlbumById } from '../../store/actions/albums';

import Loader from "../../common/Loader";
import Songs from "./Songs";

// Css
import './Album.css';

class Album extends React.Component{
    componentDidMount() {
        this.props.getAlbumById(this.props.match.params.id);
        this.props.getSongsByAlbum(this.props.match.params.id);
    }

    render(){
        let songs=this.props.albums.songs;
        let album=this.props.albums.album;

        if (this.props.albums.isLoading) {
            return <Loader />
        } else if (this.props.albums.error) {
            return <p>Error al obtener los datos</p>
        } else if (this.props.albums.songs && this.props.albums.album) {
            return <div className="album">
                <div className="header">
                    <div className="image">
                        <img src={album.cover} alt="Imagen del álbum" title="Imagen del álbum" />
                    </div>
                    <div className="data">
                        <h2 className="title">{album.name}</h2>
                        <h3 className="author">De <i>{album.artist}</i></h3>
                        <div className="songs">Nº canciones: {songs.length}</div>
                    </div>
                </div>
                <Songs data={songs} album={album.name}/>
            </div>
        } else{
            return <Loader />
        }
    }
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
    getAlbumById: (id) => dispatch(getAlbumById(id)),
    getSongsByAlbum: (id) => dispatch(getSongsByAlbum(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Album);