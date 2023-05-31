import { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";
import { MovieCard } from "../../../../components/card/MovieCard";
import { getTrendingMovies } from "../../../../api/tmdb";
import { Loader } from "../../../../components/loader/Loader";

import "swiper/css";
import "swiper/css/autoplay";

import styles from "./trendingMovies.module.scss";

export default function TrendingMovies() {
  const [resultItems, setResultItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTrendingMov = useCallback(async () => {
    const res = await getTrendingMovies();
    setResultItems(res.results);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchTrendingMov();
  }, [fetchTrendingMov]);

  return (
    <section className={styles.trendingMovies}>
        <div className={styles.trendingMoviesInner}>
          <p className={`${styles.trendingMoviesTitle} ${styles.mainTitle}`}>
            Trending:
          </p>
          {isLoading && <Loader />}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={6}
            autoplay={{ delay: 5500 }}
            breakpoints={{
              220: {
                slidesPerView: 1,
              },
              320: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              992: {
                slidesPerView: 5,
              },
              1190: {
                slidesPerView: 6,
              },
            }}
          >
            {resultItems.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </section>
  );
}
