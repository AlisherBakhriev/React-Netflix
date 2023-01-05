import React, { useEffect, useState } from "react";
import axios from "./Axios";

import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (mov) =>
            ((isLargeRow && mov.poster_path) ||
              (!isLargeRow && mov.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row_posterLarge"}`}
                key={mov.id}
                src={`${base_url}${
                  isLargeRow ? mov.poster_path : mov.backdrop_path
                }`}
                alt={mov.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
