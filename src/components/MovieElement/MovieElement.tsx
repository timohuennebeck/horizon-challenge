// libraries
import React from "react";
import { Link } from "react-router-dom";
import "./MovieElement.scss";

interface Movie {
  item: any;
}

export default function MovieElement({ item }: Movie) {
  return (
    <Link to={`movies/${item.id}`} className="movie">
      <div className="movie__box">
        <img
          src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt=""
          className="movie__box-img"
        />
      </div>

      <div className="movie__content">
        <span className="movie__content-header">{item.original_title}</span>
        <span className="movie__content-date">{item.release_date}</span>
      </div>
    </Link>
  );
}
