import React from "react";
import { connect } from "react-redux";

import Songs from "../album/Songs";

class History extends React.Component{
    render(){
        return <div id="history">
            <h2>Canciones escuchadas</h2>
            <div className="songs">
                <Songs data={this.props.user.history}/>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(
    mapStateToProps
)(History);