// libraries
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailsPage() {
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
    <div className="bg-red-500">
      <p>{data.original_title}</p>
      <p>{data.overview}</p>
      <img src={`http://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
    </div>
  );
}
