import "./styles/App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Page/HomePage";
import MovieInfoPage from "./Page/MovieInfoPage";
import Footer from "./components/Footer";
function App() {
  return (
    <div className=" h-screen overflow-y--scroll">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/info" element={<MovieInfoPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
