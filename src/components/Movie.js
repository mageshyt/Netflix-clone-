import React from "react";
import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";
import { connect } from "react-redux";
import { selectedMovie } from "../Redux/movie/movie.action";
import { useNavigate } from "react-router-dom";
//! baseURL
const base_url = "https://image.tmdb.org/t/p/original/";
const Movie = ({ movies, isLargeRow, setCurrentMovie }) => {
  let naviagte = useNavigate();

  const handleClick = (movie) => {
    setCurrentMovie(movie);
    naviagte("/info");
  };
  return (
    <Container>
      <ScrollContainer className="posters">
        {/* <div className="row__posters"> */}

        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            key={movie.id}
            className={`poster ${isLargeRow && "posterLarge"}`} //use && if theres no else or : otherwise use ?
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
        {/* </div> */}
      </ScrollContainer>
    </Container>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setCurrentMovie: (movie) => dispatch(selectedMovie(movie)),
});
export default connect(null, mapDispatchToProps)(Movie);

const Container = styled.div`
  .row {
    margin-left: 20px;
    color: white;
  }
  img {
    border-radius: 10px;
    cursor: pointer;
  }
  .scrollContainer {
    width: 50%;
  }
  .posters {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 20px;
  }
  .posters::-webkit-scrollbar {
    display: none;
  }
  .poster {
    object-fit: contain;
    width: 100%;
    max-height: 100px;
    transition: transform 450ms;
    margin-right: 10px;
  }
  .poster:hover {
    transform: scale(1.08);
  }
  .posterLarge {
    max-height: 250px;
  }
  .posterLarge:hover {
    transform: scale(1.09);
  }
`;
