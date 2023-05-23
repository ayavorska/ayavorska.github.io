import {
  Routes,
  Route,
} from "react-router-dom";
import { Header } from "./components/header/Header";
import Search from "./pages/search/Search";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
