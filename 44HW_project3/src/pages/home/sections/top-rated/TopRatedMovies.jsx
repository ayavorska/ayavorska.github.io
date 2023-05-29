import { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";
import { MovieCard } from "../../../../components/card/MovieCard";
import { getTopRatedMovies } from "../../../../api/tmdb";

import "swiper/css";
import "swiper/css/autoplay";

import styles from "./topRatedMovies.module.scss";

export default function TopRatedMovies() {
  const [resultItems, setResultItems] = useState([]);

  const fetchNowPlayingMov = useCallback(async () => {
    const res = await getTopRatedMovies();
    setResultItems(res.results);
  }, []);

  useEffect(() => {
    fetchNowPlayingMov();
  }, [fetchNowPlayingMov]);

  return (
    <section className={styles.topRatedMovies}>
      <div className="container">
        <div className={styles.topRatedMoviesInner}>
          <p href="#" className={`${styles.topRatedMoviesTitle} ${styles.mainTitle}`}>
            Top rated:
          </p>
          <Swiper modules={[Autoplay]} spaceBetween={20} slidesPerView={6} autoplay={{delay: 5000}}>
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