const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey: '73bbcb846da6fff8be578b7da63fadd2',
    apiReadAccessToken: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3M2JiY2I4NDZkYTZmZmY4YmU1NzhiN2RhNjNmYWRkMiIsInN1YiI6IjY2NTFiZDYxMDJmMjk0Zjc1MTI2ZjE1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.24VOm8isrbIHqYZ9XwPkfmc3sGam754W-k2BQFKA4kg',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
};

const PROXY = "https://sup-proxy.zephex0-f6c.workers.dev/api-json?url=";

export const TRENDING = `${PROXY}${apiConfig.baseUrl}/trending/movie/day?api_key=${apiConfig.apiKey}`;

export const SEARCH = (title) => {
    return `${PROXY}${apiConfig.baseUrl}/search/movie?api_key=${apiConfig.apiKey}&query=${title}`;
};

export const POPULAR = `${PROXY}${apiConfig.baseUrl}/movie/popular?api_key=${apiConfig.apiKey}`;

export const getInfoURL = (movieId) => {
    return `${PROXY}${apiConfig.baseUrl}/movie/${movieId}?api_key=${apiConfig.apiKey}`;
};

export const TOP_RATED = `${PROXY}${apiConfig.baseUrl}/movie/top_rated?api_key=${apiConfig.apiKey}`;

export const UPCOMING_MOVIES = `${PROXY}${apiConfig.baseUrl}/movie/upcoming?api_key=${apiConfig.apiKey}`;

export const NOW_IN_THEATERS = `${PROXY}${apiConfig.baseUrl}/movie/now_playing?api_key=${apiConfig.apiKey}`;

export const getImageUrl = (imgPath, size = 'original') => {
    return size === 'w500' ? apiConfig.w500Image(imgPath) : apiConfig.originalImage(imgPath);
};

export default apiConfig;
