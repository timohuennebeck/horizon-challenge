// libraries
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./DetailsPageHome.scss";

interface Movie {
  original_title: string;
  poster_path: string;
  overview: string;
}

export default function DetailsPageHome() {
  const [data, setData] = useState<Movie | null>(null);

  const { movieId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`
      )
      .then((resp) => {
        setData(resp.data);
      });
  }, []);

  if (!data) return null;

  return (
    <div className="details-home">
      <img className="details-home__img" src={`http://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />

      <div className="details-home__content">
        <div className="details-home__content-box">
          <h1 className="details-home__content-box-header">
            {data.original_title}
          </h1>
          <p className="details-home__content-box-overview">{data.overview}</p>
        </div>

        <Link to="/" className="details-home__content-link">
          Return To Home
        </Link>
      </div>
    </div>
  );
}
