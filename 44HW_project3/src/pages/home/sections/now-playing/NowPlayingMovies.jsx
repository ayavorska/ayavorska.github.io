import { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";
import { MovieCard } from "../../../../components/card/MovieCard";
import { getNowPlayingMovies } from "../../../../api/tmdb";

import "swiper/css";
import "swiper/css/autoplay";

import styles from "./nowPlayingMovies.module.scss";

export default function NowPlayingMovies() {
  const [resultItems, setResultItems] = useState([]);

  const fetchNowPlayingMov = useCallback(async () => {
    const res = await getNowPlayingMovies();
    setResultItems(res.results);
  }, []);

  useEffect(() => {
    fetchNowPlayingMov();
  }, [fetchNowPlayingMov]);

  return (
    <section className={styles.nowPlayingMovies}>
      <div className="container">
        <div className={styles.nowPlayingMoviesInner}>
          <p href="#" className={`${styles.nowPlayingMoviesTitle} ${styles.mainTitle}`}>
            Now playing:
          </p>
          <Swiper modules={[Autoplay]} spaceBetween={20} slidesPerView={6} autoplay={{delay: 4500}}>
            {resultItems.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}