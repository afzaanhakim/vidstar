const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const search = `&api_key=${API_KEY}`;

//
(module.exports = {
  fetchTrending: {
    title: "π₯Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "π₯ Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "π« Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchHorrorMovies: {
    title: "π» Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchComedyMovies: {
    title: "π€£ Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchRomanceMovies: {
    title: "π Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMystery: {
    title: "π΅οΈββοΈ Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchSciFi: {
    title: "π½ Sci-Fi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchTV: {
    title: "πΊ TV Movie",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
  fetchAnimation: {
    title: "π¨ Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
}),
  API_KEY,
  search;
