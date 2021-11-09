import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import MoviesContainer from "./components/MoviesContainer";

function App() {
  return (
    <div className="App h-full">
      <Header />
      {/* banner */}
      <div className="center mr-2 ml-2">
        <Banner />
      </div>
      {/* Movie container */}
      <main className="max-w-6xl mt-5 mx-auto">
        <section className="pt-6">
          <MoviesContainer />
        </section>
      </main>
    </div>
  );
}

export default App;
