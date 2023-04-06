import "./CategoriesPage.scss";

// libraries
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieElement from "../../components/MovieElement/MovieElement";
import { v4 as uuidv4 } from "uuid";
import { DiscoverMovies } from "../../utils/apiCalls";

export default function CategoriesPage() {
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const results = await DiscoverMovies(id ?? "0");
      setData(results);
    };

    fetchData();
  }, [id]);

  if (!data) return null;

  return (
    <div className="categories" data-testid="categories">
      {data.map((item) => {
        return <MovieElement key={uuidv4()} item={item} />;
      })}
    </div>
  );
}
