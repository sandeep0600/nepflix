// API key for TMDb API authentication
export const API_KEY = "73bbcb846da6fff8be578b7da63fadd2";

// Proxy URL to handle CORS issues
export const PROXY = "https://sup-proxy.zephex0-f6c.workers.dev/api-json?url=";

// Endpoint to get trending movies of the day
export const TRENDING = `${PROXY}https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

// Function to get the search URL for a movie title
export const SEARCH = (title) => {
	return `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}`;
};

// Endpoint to get popular movies
export const POPULAR = `${PROXY}https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

// Function to get detailed information about a specific movie by ID
export const getInfoURL = (movieId) => {
	return `${PROXY}https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
};

// Endpoint to get top-rated movies
export const TOP_RATED = `${PROXY}https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

// Endpoint to get upcoming movies
export const UPCOMING_MOVIES = `${PROXY}https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;

// Endpoint to get movies currently playing in theaters
export const NOW_IN_THEATERS = `${PROXY}https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

