import React from 'react';
import {tmdbMovieDetails,tmdbMovieCast,tmdbMovieVideos} from "../../api/tmdb"
import {omdbMovieDetails} from "../../api/omdb"
import Actor from "../Actor/Actor"
import ShowTrailer from "../ShowTrailer/ShowTrailer"

class MovieDetails extends React.Component{
    state = {movie:null,
        trailerToShow:false,
        trailers:null };


    async componentDidMount(){
        const id = this.props.match.params.id;
        const tmdbDetails = await tmdbMovieDetails(id);
        const omdbDetails =  await omdbMovieDetails(tmdbDetails.imdb_id);
        const tmdbCast = await tmdbMovieCast(id);
        console.log("compoentDidMount",tmdbDetails, omdbDetails, tmdbCast);

        const movieObj = {
            title: omdbDetails.Title,
            year: omdbDetails.Year,
            tmdbRating: tmdbDetails.vote_average,
            genre: omdbDetails.Gengre,
            actors:tmdbCast
        }
        
        this.setState({movie: movieObj});
    }

    async onClick() {
        const id = this.props.match.params.id;
        const tmdbVideos = await tmdbMovieVideos(id);
        console.log("onClick videos", tmdbVideos);
        const ids = tmdbVideos.map((video) => video.key);
        this.setState({trailerToShow:true});
        this.setState({trailers:ids});
    }
    handlerHide() {
        this.setState({trailers:null});
        console.log("handlerHide", "*******");
    }

    render() {
        const displayActors = () =>{
            const actorsWithProfile = this.state.movie.actors.filter((actor => actor.profile_path!=null))
            const actors = actorsWithProfile.map((actor) => {
                return <div key={actor.cast_id}><Actor name={actor.name} id={actor.cast_id} poster={actor.profile_path}></Actor></div>
            })
           return actors;
        }
        const displayMovie = () =>{
            return <div>
                    <h1>{this.state.movie.title}</h1>
                    <div>{this.state.trailers && <ShowTrailer id={this.state.trailers[0]} handlerHide={this.handlerHide.bind(this)}/>}</div>
                    <div><a href="#" onClick={() => this.onClick()}>Trailer</a></div>
                    <div>{this.state.movie.year}</div>
                    <div>{this.state.movie.tmdbRating}</div>
            </div>

        }
        return(
        <div>
            <div>{this.state.movie && displayMovie()}</div>
            <div style={{display: "flex", flexWrap: "wrap"}}>{this.state.movie && displayActors()}</div>
        </div>
        )
    }

}

export default MovieDetails;