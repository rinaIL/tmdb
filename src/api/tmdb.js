import axios from 'axios';

const API_KEY = "49471dfc358ec786971eacba559a2766";
const basicQueary = 'https://api.themoviedb.org/3';
const popularMovie = '/movie/popular';

export const tmdbPupularMovie = async () => {

    const data = await axios.get(`${basicQueary}${popularMovie}`,{params: {
        language:"en-US",
        include_adult:false,
        page:1,
        api_key: API_KEY,
       
    }});

    return data.data;
}

export const tmdbMovieDetails = async(id) => {
    const data = await axios.get(`${basicQueary}/movie/${id}`,{params: {
        language:"en-US",
        api_key: API_KEY,
    }});

    return data.data;

}

export const tmdbMovieCast = async(id) => {
    const data = await axios.get(`${basicQueary}/movie/${id}/credits`,{params: {
        api_key: API_KEY,
    }});

    return data.data.cast;
}

export const tmdbMovieVideos = async(id) => {
    const data =  await axios.get (`${basicQueary}/movie/${id}/videos`,{params: {
        api_key: API_KEY,
    }});

    return data.data.results;
}