import axios from 'axios';

const API_KEY = "8551a464";
const basicQueary = 'http://www.omdbapi.com';


export const omdbMovieDetails = async (imdbId) => {

    const data = await axios.get(`${basicQueary}`,{params: {
        i:imdbId,
        apikey:API_KEY
    }});

    return data.data;
}