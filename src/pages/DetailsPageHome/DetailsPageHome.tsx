// libraries
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DetailsInterface } from "../../interfaces/appInterfaces";
import { MovieDetails } from "../../utils/apiCalls";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MovieContext } from "../../App";

export default function DetailsPageHome() {
  const [data, setData] = useState<DetailsInterface | null>(null);
  const { favorites, updateFavorite } = useContext(MovieContext);

  const { movieId } = useParams();

  // fetches the data from the api
  useEffect(() => {
    const fetchData = async () => {
      const results = await MovieDetails(movieId ?? "0");
      setData(results);
    };

    fetchData();
  }, [movieId]);

  if (!data) return null;

  const handleFavorite = (e: any) => {
    if (e === data.id) {
      updateFavorite(data.id, !favorites[data.id]);
    }
  };

  return (
    <div className="flex flex-col gap-8 w-3/4 mx-auto md:flex-row">
      <div className="relative">
        <img
          className="rounded-xl shadow-5xl w-[25rem] min-w-[25rem]"
          src={`http://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt=""
        />
        <button
          className="z-50 absolute top-4 left-4 bg-transparent border-none"
          onClick={() => handleFavorite(data.id)}
        >
          {favorites[data.id] ? (
            <AiFillHeart className="w-6 h-6 text-red-500" />
          ) : (
            <AiOutlineHeart className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-7xl font-bold">{data.original_title}</h1>
          <p>{data.overview}</p>
        </div>

        <Link
          to="/"
          className="bg-white px-3 py-2 self-start rounded-md text-black shadow-5xl"
        >
          Return To Home
        </Link>
      </div>
    </div>
  );
}
