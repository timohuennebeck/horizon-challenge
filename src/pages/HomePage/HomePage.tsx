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
    <div className="flex flex-col gap-4">
      <div
        className="bg-cover bg-no-repeat bg-center h-[20rem] flex items-center p-8 rounded-md"
        style={{ backgroundImage: "url(./assets/images/bg.jpeg)" }}
      >
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl font-bold">Welcome</h2>
          <h3 className="text-2xl font-bold">
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
          <input
            className="bg-white rounded-full border-none p-4 w-full outline-none shadow-5xl"
            placeholder="Search for a movie, tv show, person..."
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>
      </div>

      {userInput === "" ? (
        <>
          <h2 className="text-2xl font-bold">Categories</h2>
          <div className="flex gap-4 overflow-x-scroll pb-4">
            {data.map((item) => {
              return (
                <div className="flex p-4 justify-center items-center min-h-[1rem] max-h-[1rem] px-4 bg-white shadow-5xl rounded-md hover:scale-101 transform transition">
                  <Link
                    key={uuidv4()}
                    to={`${item.id}`}
                    className="text-decoration-none whitespace-nowrap text-black"
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </div>

          <h2 className="text-2xl font-bold">Trending</h2>
          <div className="relative flex gap-8 overflow-x-scroll overflow-y-hidden">
            {trending.map((item) => {
              return <MovieElement key={uuidv4()} item={item} />;
            })}
          </div>

          <h2 className="text-2xl font-bold">What's Popular</h2>
          <div className="relative flex gap-8 overflow-x-scroll overflow-y-hidden">
            {popular.map((item) => {
              return <MovieElement key={uuidv4()} item={item} />;
            })}
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-4">
          {filteredSearch.map((item) => {
            return <MovieElement key={uuidv4()} item={item} />;
          })}
        </div>
      )}
    </div>
  );
}
