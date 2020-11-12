import React from "react";
import {withRouter} from "react-router-dom";


const Actor = (props) => {
    const image = props.poster ? `http://image.tmdb.org/t/p/w185//${props.poster}`
    : "http://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg"
    const cardStyle = {
        boder:"1px solid black",
        height: "300px",
        width: "200px",
        background: `url(${image}) no-repeat center center`
    }

    const handleOnClick = () => {
        props.history.push(`/movie/${props.id}`);
    }
    return(
        <div onClick={handleOnClick} style={cardStyle}>
            <h3> {props.name}</h3>
        </div>
    );
};

export default withRouter(Actor);