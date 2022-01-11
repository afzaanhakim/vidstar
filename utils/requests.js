
const API_KEY = process.env.API_KEY


const search = `&api_key=${API_KEY}`

// 
module.exports = {
  fetchTrending: {
    title: '🔥Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: '🔥 Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: '🔫 Action',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchHorrorMovies: {
    title: '👻 Horror',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchComedyMovies: {
    title: '🤣 Comedy',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchRomanceMovies: {
    title: '💖 Romance',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMystery: {
    title: '🕵️‍♀️ Mystery',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchSciFi: {
    title: '👽 Sci-Fi',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchTV: {
    title: '📺 TV Movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
  fetchAnimation: {
    title: '🐨 Animation',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
}, API_KEY, search







