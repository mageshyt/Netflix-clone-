import React from "react";
import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";

//! baseURL
const base_url = "https://image.tmdb.org/t/p/original/";
const Movie = ({ movies, isLargeRow }) => {
  return (
    <Container className="">
      <ScrollContainer className="center  overflow-x-scroll overflow-y-auto p-5">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`poster ${isLargeRow && "posterLarge"}`} //use && if theres no else or : otherwise use ?
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </ScrollContainer>
    </Container>
  );
};

export default Movie;

const Container = styled.div`
  img {
    border-radius: 10px;
  }
  .poster {
    object-fit: contain;
    width: 100%;
    max-height: 100px;
    transition: transform 450ms;
    margin-right: 10px;
  }
  .posters::-webkit-scrollbar {
    display: none;
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
