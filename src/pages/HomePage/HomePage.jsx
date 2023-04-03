import axios from "axios";
import "./HomePage.scss";

// libraries
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`
      )
      .then((resp) => {
        setData(resp.data.genres);
      });
  }, []);

  if (!data) return;

  return (
    <div className="home">
      <input placeholder="Search..." />

      <div className="home__box">
        {data.map((item) => {
          return (
            <Link key={item.id} to={`${item.id}`} className="home__box-indv" >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
