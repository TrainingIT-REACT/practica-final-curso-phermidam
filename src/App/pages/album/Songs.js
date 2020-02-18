import React from "react";
import { connect } from "react-redux";

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

//Actions
import { addSongToHistory } from '../../store/actions/user';

// Css
import './Songs.css';

class Songs extends React.Component{
    constructor(props){
        super(props);

        this.playAudio=this.playAudio.bind(this);
    }

    playAudio(song){
        if(this.props.album) song.album=this.props.album;
        song.play=true;
        this.props.addSongToHistory(song);
    }
    
    render(){
        let songs=this.props.data.map((song, i)=>{
            return <div className="song" key={i}>
                <div className="name"><i>{song.album}</i> {song.name}</div>
                <div className="time">{Math.floor(song.seconds/60)}:{song.seconds%60}</div>
                <div className="play" onClick={() => this.playAudio(song)}><PlayArrowIcon /></div>
            </div>
        });

        return <div className="songs">{songs}</div>;
    }
}

const mapDispatchToProps = (dispatch) => ({
  addSongToHistory: (song) => dispatch(addSongToHistory(song))
});

export default connect(
    null,
    mapDispatchToProps,
  )(Songs);