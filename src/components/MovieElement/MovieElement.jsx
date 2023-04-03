// libraries
import React from "react";
import { Link } from "react-router-dom";
import "./MovieElement.scss";

export default function MovieElement({ data }) {
  console.log(data);

  return (
    <div to={`movies/${data.id}`} className="movie">
      <img
        src={`http://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
        alt=""
        className="movie__img"
      />
      <div className="movie__content">
        <span className="movie__content-header">{data.original_title}</span>
        <span className="movie__content-header">{data.release_date}</span>
        <Link to={`movies/${data.id}`} className="movie__content-browse">
          Show More
        </Link>
      </div>
    </div>
  );
}
