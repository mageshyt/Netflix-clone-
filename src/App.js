import "./styles/App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Page/HomePage";
import MovieInfoPage from "./Page/MovieInfoPage";
function App() {
  return (
    <div className="App h-full">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/info" element={<MovieInfoPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
