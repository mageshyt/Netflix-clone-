import React from "react";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
const Header = () => {
  const naviagte = useNavigate();
  // ! windows width
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return (
    <div className="flex items-center h-24 justify-between">
      {/* logo */}
      <ImageContainer>
        <img
          src={width > 780 ? "/images/logo.png" : "/images/mobile-netflix.png"}
          className={
            width > 780
              ? "h-32 cursor-pointer object-contain w-32"
              : "h-16 cursor-pointer object-contain w-16"
          }
          alt=""
          onClick={() => naviagte("/")}
        />
      </ImageContainer>
      {/* sections in desktop view */}
      <div className=" hidden md:inline-block md:flex space-x-4 items-center justify-around text-gray-200">
        <p className="section-items">New </p>
        <p className="section-items">Movies</p>
        <p className="section-items">Series</p>
        <p className="section-items">Cartoons</p>
      </div>
      {/* searchbar in mobile view */}
      <div className="flex items-center justify-between ml-2 bg-gray-200 px-3 py-2 rounded-lg md:hidden">
        {/* search bar style */}
        <div>
          <input
            className="bg-gray-200 w-full h-full outline-none "
            type="text"
            placeholder="Search"
          />
        </div>
        <div>
          <SearchIcon className="h-6  w-6 left-2 center p-1 bg-purple-500 rounded-full" />
        </div>
      </div>
      {/* search */}
      <div className="flex items-center space-x-3 p-4  md:mr-4 ">
        <SearchIcon className="logo-white cursor-pointer font-light hidden md:inline-block" />
        {/* bell button */}
        <div className="relative">
          <span
            className="
        absolute inline-flex h-2 left-4  w-2 rounded-full 
        bg-red-500 "
          ></span>
          <BellIcon className="logo-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
export default Header;

const ImageContainer = styled.div`
  @media (max-width: 768px) {
    background-image: url("/images/mobile-netflix.png");
  }
`;
