import "./HomePage.scss";

// libraries
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  HomePageInterface,
  DetailsInterface,
} from "../../interfaces/appInterfaces";

// components
import MovieElement from "../../components/MovieElement/MovieElement";
import {
  MovieGenres,
  PopularMovies,
  TrendingMovies,
} from "../../utils/apiCalls";

export default function HomePage() {
  const [data, setData] = useState<HomePageInterface[]>([]);
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState<DetailsInterface[]>([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const fetchGenres = async () => {
      const results = await MovieGenres();
      setData(results);
    };

    const fetchPopular = async () => {
      const results = await PopularMovies();
      setPopular(results);
    };

    const fetchTrending = async () => {
      const results = await TrendingMovies();
      setTrending(results);
    };

    fetchGenres();
    fetchPopular();
    fetchTrending();
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
                    key={uuidv4()}
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
              return <MovieElement key={uuidv4()} item={item} />;
            })}
          </div>

          <h2 className="home__header">What's Popular</h2>
          <div className="home__popular">
            {popular.map((item) => {
              return <MovieElement key={uuidv4()} item={item} />;
            })}
          </div>
        </>
      ) : (
        <div className="home__search">
          {filteredSearch.map((item) => {
            return <MovieElement key={uuidv4()} item={item} />;
          })}
        </div>
      )}
    </div>
  );
}
