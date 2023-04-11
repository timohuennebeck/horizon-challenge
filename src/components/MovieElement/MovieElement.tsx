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

  return (
    <Link
      to={`movies/${item.id}`}
      className="min-w-[10rem] max-w-[10rem] flex flex-col gap-4 text-decoration-none hover:scale-101"
    >
      <div className="mb-4 relative shadow-5xl rounded-xl">
        <img
          src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt=""
          className="w-[10rem] rounded-xl"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleFavorite(item.id);
          }}
          className="bg-transparent border-none rounded-md z-50 absolute top-4 left-4"
        >
          {favorites[item.id] ? (
            <AiFillHeart className="w-6 h-6 text-red-500" />
          ) : (
            <AiOutlineHeart className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <span className="font-bold">{item.original_title}</span>
        <span className="text-gray-500">{item.release_date}</span>
      </div>
    </Link>
  );
}
