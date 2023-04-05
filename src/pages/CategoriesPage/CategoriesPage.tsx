import "./CategoriesPage.scss";

// libraries
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieElement from "../../components/MovieElement/MovieElement";
import { v4 as uuidv4 } from "uuid";

export default function CategoriesPage() {
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&with_genres=${id}`
      )
      .then((resp) => {
        setData(resp.data.results);
      });
  }, []);

  if (!data) return null;

  return (
    <div className="categories" data-testid="categories">
      {data.map((item) => {
        return <MovieElement key={uuidv4()} item={item} />;
      })}
    </div>
  );
}
