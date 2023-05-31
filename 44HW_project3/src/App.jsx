import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext } from "./providers/ThemeProvider";
import { Header } from "./components/header/Header";
import Search from "./pages/search/Search";
import Movies from "./pages/movies/Movies";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/movie-details/MovieDetails";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={theme ? "light" : "dark"}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movie/:movieId" element={<MovieDetails />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
