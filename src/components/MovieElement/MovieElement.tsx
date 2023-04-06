import React, { useState, useEffect } from "react";
import "./MovieElement.scss";
import { Link } from "react-router-dom";
import { MovieInterface } from "../../interfaces/appInterfaces";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function MovieElement({ item }: MovieInterface) {
  const [favorite, setFavorite] = useState(false);

  // load favorite status from localStorage
  useEffect(() => {
    const storedFavorite = localStorage.getItem(`movie-${item.id}-favorite`);

    if (storedFavorite) {
      setFavorite(JSON.parse(storedFavorite));
    }
  }, [item.id]);

  // function to handle favorite status change
  const handleFavoriteChange = () => {
    const newFavoriteStatus = !favorite;
    setFavorite(newFavoriteStatus);

    // save favorite status to localStorage
    localStorage.setItem(
      `movie-${item.id}-favorite`,
      JSON.stringify(newFavoriteStatus)
    );
  };

  return (
    <Link to={`movies/${item.id}`} className="movie">
      <div className="movie__box">
        <img
          src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt=""
          className="movie__box-img"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleFavoriteChange();
          }}
          className="movie__like"
        >
          {favorite ? (
            <AiFillHeart className="movie__like-filledIn" />
          ) : (
            <AiOutlineHeart className="movie__like-empty" />
          )}
        </button>
      </div>

      <div className="movie__content">
        <span className="movie__content-header">{item.original_title}</span>
        <span className="movie__content-date">{item.release_date}</span>
      </div>
    </Link>
  );
}
