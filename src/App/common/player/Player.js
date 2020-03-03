import React from "react";
import { connect } from "react-redux";

import './Player.css';

class Player extends React.Component{
    render(){
        if(this.props.user.history && this.props.user.history[0]){
            let song=this.props.user.history[0];
            
            return <div id="player">
                <div className="title">{song.album} - {song.name}</div>
                <div className="playerAudio">
                    <audio src={"http://localhost:3001"+song.audio} controls autoPlay/>
                </div>
            </div>
        }

        return null;
    }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(
    mapStateToProps
)(Player);