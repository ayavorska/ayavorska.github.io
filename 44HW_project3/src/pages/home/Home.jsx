import TrendingMovies from "../home/sections/trending/TrendingMovies";
import NowPlayingMovies from "../home/sections/now-playing/NowPlayingMovies";
import TopRatedMovies from "../home/sections/top-rated/TopRatedMovies";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className="container">
        <TrendingMovies />
        <NowPlayingMovies />
        <TopRatedMovies />
      </div>
    </section>
  );
}
