import { PlayIcon } from "@heroicons/react/solid";
import React from "react";
import styled from "styled-components";
const Banner = () => {
  return (
    <Container className="center flex-col rounded-xl   ">
      <div className="image-container flex-wrap w-full h-full    relative rounded-xl">
        <img
          className="w-full h-full  object-cover rounded-lg"
          src="/images/banner-1.jpg"
          alt=""
        />
        {/* div with watch now button */}
        <div className="flex justify-center  top-2/3   w-full absolute mt-4">
          <div className="flex btn-red bg-red-400 rounded-full p-2 shadow-md hover:text-white hover:bg-red-500">
            {/* button style */}

            <PlayIcon className="h-8  w-8 cursor-pointer  text-red-200" />
            <button className="font-bold text-gray-700 ">Watch Now</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
const Container = styled.div`
  height: 450px;
  width: 1000px;
  @media (max-width: 900px) {
    height: 400px;
    width: 950px;
  }
  @media (max-width: 600px) {
    height: 350px;
    width: 800px;
  }
`;
