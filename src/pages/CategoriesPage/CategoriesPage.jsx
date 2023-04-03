import React, { useEffect, useState } from "react";

// libraries
import axios from "axios";

export default function CategoriesPage() {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`
      )
      .then((resp) => {
        setData(resp.data);
      });
  }, []);

  return (
    <div>
      <p>{data.original_title}</p>
      <p>{data.overview}</p>
      <img src={`http://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
    </div>
  );
}
