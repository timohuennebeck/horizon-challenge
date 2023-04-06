// libraries
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./DetailsPage.scss";
import { DetailsInterface } from "../../interfaces/appInterfaces";
import { MovieDetails } from "../../utils/apiCalls";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function DetailsPage() {
  const [data, setData] = useState<DetailsInterface | null>(null);
  const favorite = false;

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const results = await MovieDetails(movieId ?? "0");
      setData(results);
    };

    fetchData();
  }, [movieId]);

  if (!data) return null;

  return (
    <div className="details">

      <div className="details__box">
        <img
          className="details__box-img"
          src={`http://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt=""
        />
        <button className="details__box-like">
          {favorite ? (
            <AiFillHeart className="details__box-like-filledIn" />
          ) : (
            <AiOutlineHeart className="details__box-like-empty" />
          )}
        </button>
      </div>

      <div className="details__content">
        <div className="details__content-box">
          <h1 className="details__content-box-header">
            {data.original_title}
          </h1>
          <p className="details__content-box-overview">{data.overview}</p>
        </div>

        <Link to="/" className="details__content-link">
          Return To Home
        </Link>
      </div>
    </div>
  );
}
