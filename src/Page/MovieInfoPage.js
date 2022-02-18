import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Header from "../components/Header";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { selectCurrentMovie } from "../Redux/movie/movie.selector";
import styled from "styled-components";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import { AiFillPlayCircle } from "react-icons/ai";
const base_url = "https://image.tmdb.org/t/p/original/";
const MovieInfoPage = ({ movie }) => {
  const [trailerUrl, setTrailerUrl] = React.useState("");
  movieTrailer(movie?.title).then((response) => {
    const trailerId = response?.match(/[^?&]*v=([^&]+)/)?.[1];
    setTrailerUrl(trailerId);
  });
  const opts = {
    height: "490 ",
    width: "800",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  // ! for like and trailer
  const [like, setLike] = React.useState(false);
  const [playVideo, setPlayVideo] = React.useState(false);

  return (
    <div className="h-screen overflow-y-scroll select-none  moviePage">
      <Header />
      <MoviesContainer className="flex flex-col mt-10 md:flex-row items-center justify-around">
        {/* left */}
        <div className=" center flex-col md:w-2/5 w-full">
          {/* poster */}
          <span className="text-3xl ml-4 font-bold text-green-500 left-6 ">
            {movie?.original_title || movie?.name}
          </span>
          {/* overview */}
          <p className="text-md text-gray-500 w-full mb-2 mt-2 text-center">
            {movie?.overview}
          </p>
        </div>
        {/* Right side */}
        <div className="right__container  rounded-xl ">
          {playVideo ? (
            <div className="movie__trailer center">
              <YouTube className=" video" opts={opts} videoId={trailerUrl} />
            </div>
          ) : (
            <img
              className="rounded-xl select-none "
              src={`${base_url}${movie.backdrop_path}`}
              alt=""
            />
          )}
          {/* Trailer like session */}
          <div className="center justify-around pb-4 mt-5">
            {/* trailer */}
            <div
              onClick={() => setPlayVideo(!playVideo)}
              className="flex text-gray-500 border-2 select-none border-gray-500 rounded-md p-2 space-x-2 font-medium cursor-pointer "
            >
              <span className=" ">{playVideo ? "Stop" : "watch"} Trailer</span>
              <AiFillPlayCircle className="text-gray-600  text-2xl" />
            </div>
            {/* like */}
            <div className="center flex-col" onClick={() => setLike(!like)}>
              {like ? (
                <AiFillHeart className="text-red-500 text-2xl cursor-pointer" />
              ) : (
                <AiOutlineHeart className="text-white text-2xl cursor-pointer" />
              )}
              <p className="text-gray-600 text-md">
                {like ? movie.vote_count + 1 : movie.vote_count}
              </p>
            </div>
          </div>
        </div>
      </MoviesContainer>
    </div>
  );
};

const mapStateToProps = (state) =>
  createStructuredSelector({
    movie: selectCurrentMovie,
  });
export default connect(mapStateToProps)(MovieInfoPage);

const MoviesContainer = styled.div`
  .right__container {
    img {
      height: 500px;
      width: 800px;
    }
    .video {
      height: 400px;
      width: 800px;
    }

    @media (max-width: 756px) {
      img {
        height: 400px;
        width: 600px;
      }
      .video {
        height: 400px;
        width: 600px;
      }
    }

    @media (max-width: 550px) {
      img {
        height: 300px;
        width: 450px;
      }

      .video {
        height: 400px;
        width: 400px;
      }
    }
  }
`;
