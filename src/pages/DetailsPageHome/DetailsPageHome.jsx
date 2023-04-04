// libraries
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./DetailsPageHome.scss";

export default function DetailsPageHome() {
  const [data, setData] = useState([]);

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

  return (
    <div className="details-home">
      <img src={`http://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />

      <div className="details-home__content">
        <div className="details-home__content-box">
          <h1 className="details-home__content-box-header">{data.original_title}</h1>
          <p className="details-home__content-box-overview">{data.overview}</p>
        </div>

        <Link to="/categories" className="details-home__content-link">
          Return To Categories
        </Link>
      </div>
    </div>
  );
}
