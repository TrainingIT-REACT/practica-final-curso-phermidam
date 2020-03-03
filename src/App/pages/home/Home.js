import React from "react";
import { connect } from "react-redux";

import Loader from "../../common/Loader";
import { getAlbums } from '../../store/actions/albums';
import Albums from './Albums';

class Home extends React.Component{
    componentDidMount() {
        this.props.getAlbums();
    }

    render(){
        const { isLoading, albums, error } = this.props.albums;
        if (isLoading) {
            return <Loader />
        } else if (error) {
            return <p>Error al obtener los datos</p>
        } else if (albums.length>0) {
            return <Albums data={albums} />;
        } else{
            return <Loader />
        }
    }
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
    getAlbums: () => dispatch(getAlbums()),
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);