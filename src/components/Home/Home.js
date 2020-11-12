import React from "react";
import MovieList from "../MovieList/MovieList";


const Home = (props) => {
    console.log("Home",props);
    return(
        <div >
 
            <MovieList category="popular"></MovieList>
        </div>
    );
}

export default Home;