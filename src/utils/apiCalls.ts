import axios from "axios";

export async function DiscoverMovies(id: string) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=85d7cc26f8d23ad9cb229af2a7ba571e&with_genres=${id}`
  );
  return response.data.results;
}

export async function MovieDetails(movieId: string) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=85d7cc26f8d23ad9cb229af2a7ba571e`
  );
  return response.data;
}

export async function MovieGenres() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=85d7cc26f8d23ad9cb229af2a7ba571e`
  );

  return response.data.genres;
}

export async function PopularMovies() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=85d7cc26f8d23ad9cb229af2a7ba571e`
  );

  return response.data.results;
}

export async function TrendingMovies() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=85d7cc26f8d23ad9cb229af2a7ba571e`
  );

  return response.data.results;
}
