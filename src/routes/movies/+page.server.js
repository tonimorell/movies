import { error } from '@sveltejs/kit';
import { X_RAPIDAPI_KEY, X_RAPIDAPI_HOST } from '$env/static/private';


const options = {
  method: 'GET',
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': X_RAPIDAPI_KEY,
    'X-RapidAPI-Host': X_RAPIDAPI_HOST,
  }
}

export async function load({ fetch, url }) {
  return {
    movies: getMoviesByKeyword(url.searchParams.get('keyword'), fetch),
  };
}

const getMoviesByKeyword = async (keyword, fetch) => {
  const URL = `https://streaming-availability.p.rapidapi.com/v2/search/basic?country=us&services=netflix%2Cprime.buy%2Chulu.addon.hbo%2Cpeacock.free&output_language=en&show_type=movie&genre=18&show_original_language=en${keyword ? `&keyword=${keyword}` : ''}`;
  return fetch(URL, options)
    .then(response => response.json())
    .then(response => {
      if (response.error) {
        throw new Error(response.error);
      }
      console.log(response.result);
      return response.result
    })
    .catch(err => {
      throw error(500, err.message);
    });
}