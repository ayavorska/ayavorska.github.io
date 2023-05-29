import { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";
import { MovieCard } from "../../../../components/card/MovieCard";
import { getTrendingMovies } from "../../../../api/tmdb";

import "swiper/css";
import "swiper/css/autoplay";

import styles from "./trendingMovies.module.scss";

export default function TrendingMovies() {
  const [resultItems, setResultItems] = useState([]);

  const fetchTrendingMov = useCallback(async () => {
    const res = await getTrendingMovies();
    setResultItems(res.results);
  }, []);

  useEffect(() => {
    fetchTrendingMov();
  }, [fetchTrendingMov]);

  return (
    <section className={styles.trendingMovies}>
      <div className="container">
        <div className={styles.trendingMoviesInner}>
          <p href="#" className={`${styles.trendingMoviesTitle} ${styles.mainTitle}`}>
            Trending:
          </p>
          <Swiper modules={[Autoplay]} spaceBetween={20} slidesPerView={6} autoplay={{delay: 5500}}>
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
