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
        let duration=0;
        
        if(songs){
            songs.map((song, i)=>{
                duration+=song.seconds;
            });
        }

        if (this.props.albums.isLoading) {
            return <Loader />
        } else if (this.props.albums.error) {
            return <p>Error al obtener los datos</p>
        } else if (this.props.albums.songs && this.props.albums.album) {
            return <div className="album">
                <div className="header">
                    <div className="image">
                        <img src={"http://localhost:3001"+album.cover} alt="Imagen del álbum" title="Imagen del álbum" />
                    </div>
                    <div className="data">
                        <h2 className="title">{album.name}</h2>
                        <h3 className="author">De <i>{album.artist}</i></h3>
                        <div className="songs"><strong>Nº canciones</strong> {songs.length}</div>
                        <div className="duration"><strong>Duración</strong> {Math.floor(duration/60)}:{duration%60}</div>
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