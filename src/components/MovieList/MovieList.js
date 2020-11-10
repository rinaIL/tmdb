import React from "react";
import Card from "../Card/Card";
import {tmdbPupularMovie} from "../../api/tmdb"

class MovieList extends React.Component {
    state = {data:null};
    
    async componentDidMount() {
        switch (this.props.category) {
            case "popular":
                const data = await tmdbPupularMovie();
                console.log("componentDidMount", data);
                return this.setState({data:data});
            default:
                break;
        }
    }

    render() {
        console.log("DATA in render", this.state.data);

        const displayCard = () => {
            return(
                this.state.data &&
                this.state.data.results.map((movie) => {
                    return(
                        <div>
                            <Card
                                title={movie.title}
                                year={movie.release_date}
                                rating={movie.vote_average}
                                id={movie.id}
                                poster = {movie.poster_path}
                             ></Card>   
                        </div>
                    );
                })
            );
        }

        return<div style={{display: "flex", flexWrap: "wrap"}}>{this.state.data && displayCard()}</div>;
    }


}


export default MovieList;    