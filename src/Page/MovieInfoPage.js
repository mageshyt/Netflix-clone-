import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Header from "../components/Header";

import { selectCurrentMovie } from "../Redux/movie/movie.selector";

const base_url = "https://image.tmdb.org/t/p/original/";

const MovieInfoPage = ({ movie }) => {
  console.log("MovieInfoPage: ", movie);
  return (
    <div className="h-screen  moviePage">
      <Header />
      <div className="relative">
        <img src={`${base_url}${movie.backdrop_path}`} alt="" />

        <div className="movieInfo absolute top-20 left-10">
          {/* poster */}

          <span className="text-3xl font-bold text-green-500 left-6 ">
            {movie?.original_title || movie?.name}
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) =>
  createStructuredSelector({
    movie: selectCurrentMovie,
  });
export default connect(mapStateToProps)(MovieInfoPage);
