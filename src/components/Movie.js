import React from "react";
import styled from "styled-components";
const Movie = ({ name, image }) => {
  return (
    <container className="center flex-col">
      <img
        src={image}
        className="h-56 w-56 img-hover   object-cover cursor-pointer rounded-lg "
        alt="banner"
      />
      <p className="text-gray-300 font-semibold ">{name}</p>
    </container>
  );
};

export default Movie;

const Container = styled.div``;
