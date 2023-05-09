import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Blog } from "./components/Blog";
import { News } from "./components/News";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Blog/>
        <News/>
      </main>
    </>
  );
}

export default App;
