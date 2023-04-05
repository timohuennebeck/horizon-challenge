import "./HomePage.scss";

// libraries
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// components
import MovieElement from "../../components/MovieElement/MovieElement";

interface Movie {
  id: number;
  name: string;
}

interface Popular {
  original_title: string;
}

export default function HomePage() {
  const [data, setData] = useState<Movie[]>([]);
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState<Popular[]>([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`
      )
      .then((resp) => {
        setData(resp.data.genres);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`
      )
      .then((resp) => {
        setPopular(resp.data.results);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`
      )
      .then((resp) => {
        setTrending(resp.data.results);
      });
  }, []);

  const filteredSearch = popular.filter((item) =>
    item.original_title.toLowerCase().includes(userInput.toLowerCase())
  );

  if (!data || !trending || !popular) return null;

  return (
    <div className="home">
      <div className="home__background">
        <div className="home__background-center">
          <h2 className="home__background-center-header">Welcome</h2>
          <h3 className="home__background-center-subHeader">
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
          <input
            className="home__background-center-search"
            placeholder="Search for a movie, tv show, person..."
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>
      </div>

      {userInput === "" ? (
        <>
          <h2 className="home__header">Categories</h2>
          <div className="home__box">
            {data.map((item) => {
              return (
                <div className="home__box-indv">
                  <Link
                    key={item.id}
                    to={`${item.id}`}
                    className="home__box-indv-link"
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </div>

          <h2 className="home__header">Trending</h2>
          <div className="home__trending">
            {trending.map((item) => {
              return <MovieElement key={item} item={item} />;
            })}
          </div>

          <h2 className="home__header">What's Popular</h2>
          <div className="home__popular">
            {popular.map((item) => {
              return <MovieElement item={item} />;
            })}
          </div>
        </>
      ) : (
        <div className="home__search">
          {filteredSearch.map((item) => {
            return <MovieElement item={item} />;
          })}
        </div>
      )}
    </div>
  );
}
