// libraries
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./DetailsPage.scss";

interface Movie {
  original_title: string;
  poster_path: string;
  overview: string;
}

export default function DetailsPage() {
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
    <div className="details">
      <img src={`http://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />

      <div className="details__content">
        <div className="details__content-box">
          <h1 className="details__content-box-header">{data.original_title}</h1>
          <p className="details__content-box-overview">{data.overview}</p>
        </div>

        <Link to="/" className="details__content-link">
          Return To Home
        </Link>
      </div>
    </div>
  );
}
