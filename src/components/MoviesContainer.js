import React, { useState, useEffect } from "react";
import { MovieData } from "../assets/moviedata";
import Movie from "./Movie";

import axios from "../axios";

const MoviesContainer = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results.splice(1));
    }
    fetchData();
  }, [fetchUrl]);
  // console.log("movie -->", movies.length);

  return (
    <div className="max-w-7xl">
      <h2 className="title text-left">{title}</h2>
      <Movie className="movie" isLargeRow={isLargeRow} movies={movies} />
    </div>
  );
};

export default MoviesContainer;
