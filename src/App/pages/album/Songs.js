import React from "react";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

class Songs extends React.Component{
    render(){
        let songs=this.props.data.map((song, i)=>{
            return <div className="song" key={i}>
                <div className="name">{song.name}</div>
                <div className="time">{Math.floor(song.seconds/60)}:{song.seconds%60}</div>
                <div className="play"><PlayArrowIcon /></div>
            </div>
        });

        return <div className="songs">{songs}</div>;
    }
}

export default Songs;