import React from "react";
import { MovieData } from "../assets/moviedata";
import Movie from "./Movie";
import styled from "styled-components";
const MoviesContainer = () => {
  return (
    <div className="max-w-7xl">
      <h2 className="title text-center">My List</h2>
      <Wrapper className="flex items-center justify-around mt-4">
        {MovieData.map(({ name, image }) => (
          <Movie className="movie" key={name} name={name} image={image} />
        ))}
      </Wrapper>
    </div>
  );
};

export default MoviesContainer;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
