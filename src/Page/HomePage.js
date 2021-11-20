import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import MoviesContainer from "../components/MoviesContainer";
import requests from "../requests";
import "../styles/HomePagestyle.css";
const HomePage = () => {
  return (
    <div className="home">
      <Header />
      {/* banner */}
      <div className="center mr-2 ml-2">
        <Banner />
      </div>
      {/* Movie container */}
      <main className="max-w-6xl mt-5 box box-border	 mx-auto">
        <section className="pt-6">
          {/* <MoviesContainer title="My List" /> */}

          <MoviesContainer
            isLargeRow
            title="Netflix Originals"
            fetchUrl={requests.fetchNetflixOriginals}
          />
          <MoviesContainer
            title="Trending now"
            fetchUrl={requests.fetchTrending}
          />
          <MoviesContainer
            title="Top Rated"
            fetchUrl={requests.fetchTopRated}
          />
          <MoviesContainer
            title="Action Movies"
            fetchUrl={requests.fetchActionMovies}
          />
          <MoviesContainer
            title="Comedy Movies"
            fetchUrl={requests.fetchComedyMovies}
          />
          <MoviesContainer
            title="Horror Movies"
            fetchUrl={requests.fetchHorrorMovies}
          />
          <MoviesContainer
            title="Romance Movies"
            fetchUrl={requests.fetchRomanceMovies}
          />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
