import React from "react";
import {withRouter} from "react-router-dom";


const Card = (props) => {
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
        // props.history.push({
        //       pathname: `/movie/${props.id}`,
        //       state:{id:props.id} 
        // })
    }
    return(
        <div onClick={handleOnClick} style={cardStyle}>
            <h1> {props.title}</h1>
            <div>{props.rating}</div>
            <div>{props.year}</div>
        </div>
    );
};

export default withRouter(Card);