import React from "react";
import MovieList from "../MovieList/MovieList";

const Home = () => {
    return(
        <div>
            <MovieList category="popular"></MovieList>
        </div>
    );
}

export default Home;