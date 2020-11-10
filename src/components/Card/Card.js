import React from "react";

const Card = (props) => {
    const image = props.poster ? `http://image.tmdb.org/t/p/w185//${props.poster}`
    : "http://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg"
    console.log("Image in Card", image);
    const cardStyle = {
        boder:"1px solid black",
        height: "300px",
        width: "200px",
        background: `url(${image}) no-repeat center center`
    }
    return(
        <div style={cardStyle}>
            <h1> {props.title}</h1>
            <div>{props.rating}</div>
            <div>{props.year}</div>
        </div>
    );
};

export default Card;