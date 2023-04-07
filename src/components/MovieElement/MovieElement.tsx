import "./MovieElement.scss";

// libraries
import React from "react";
import { Link } from "react-router-dom";

// contexts
import { useContext } from "react";
import { MovieContext } from "../../App";

// icons
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

// interfaces
import { MovieInterface } from "../../interfaces/appInterfaces";

export default function MovieElement({ item }: MovieInterface) {
  const { favorites, updateFavorite } = useContext(MovieContext);

  const handleFavorite = (e: any) => {
    if (e === item.id) {
      updateFavorite(item.id, !favorites[item.id]);
    }
  };

  // // load favorite status from localStorage
  // useEffect(() => {
  //   const storedFavorite = localStorage.getItem(`movie-${item.id}-favorite`);

  //   if (storedFavorite) {
  //     setFavorite(JSON.parse(storedFavorite));
  //   }
  // }, [item.id]);

  // // function to handle favorite status change
  // const handleFavoriteChange = () => {
  //   const newFavoriteStatus = !favorite;
  //   setFavorite(newFavoriteStatus);

  //   // save favorite status to localStorage
  //   localStorage.setItem(
  //     `movie-${item.id}-favorite`,
  //     JSON.stringify(newFavoriteStatus)
  //   );
  // };

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
            handleFavorite(item.id);
          }}
          className="movie__like"
        >
          {favorites[item.id] ? (
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
