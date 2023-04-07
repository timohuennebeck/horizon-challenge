import axios from "axios";

export async function DiscoverMovies(id: string) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_REACT_APP_MOVIES_API_KEY}&with_genres=${id}`
  );
  return response.data.results;
}

export async function MovieDetails(movieId: string) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_REACT_APP_MOVIES_API_KEY}`
  );
  return response.data;
}

export async function MovieGenres() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_REACT_APP_MOVIES_API_KEY}`
  );

  return response.data.genres;
}

export async function PopularMovies() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_REACT_APP_MOVIES_API_KEY}`
  );

  return response.data.results;
}

export async function TrendingMovies() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_REACT_APP_MOVIES_API_KEY}`
  );

  return response.data.results;
}
