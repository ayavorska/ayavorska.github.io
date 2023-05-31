import { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";
import { MovieCard } from "../../../../components/card/MovieCard";
import { getNowPlayingMovies } from "../../../../api/tmdb";
import { Loader } from "../../../../components/loader/Loader";

import "swiper/css";
import "swiper/css/autoplay";

import styles from "./nowPlayingMovies.module.scss";

export default function NowPlayingMovies() {
  const [resultItems, setResultItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchNowPlayingMov = useCallback(async () => {
    const res = await getNowPlayingMovies();
    setResultItems(res.results);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchNowPlayingMov();
  }, [fetchNowPlayingMov]);

  return (
    <section className={styles.nowPlayingMovies}>
        <div className={styles.nowPlayingMoviesInner}>
          <p
            className={`${styles.nowPlayingMoviesTitle} ${styles.mainTitle}`}
          >
            Now playing:
          </p>
          {isLoading && <Loader />}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={6}
            autoplay={{ delay: 4500 }}
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
                spaceBetween: 10
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
