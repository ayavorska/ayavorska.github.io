import { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";
import { MovieCard } from "../../components/card/MovieCard";
import { getMovieRecommendations } from "../../api/tmdb";

import "swiper/css";
import "swiper/css/autoplay";

import styles from "./recommendedMovies.module.scss";

export default function RecommendedMovies({ movieId }) {
  const [resultItems, setResultItems] = useState([]);

  const fetchRecommendedMov = useCallback(async () => {
    const res = await getMovieRecommendations({ movieId });
    setResultItems(res.results);
  }, [ movieId ]);

  useEffect(() => {
    fetchRecommendedMov();
  }, [fetchRecommendedMov]);

  return (
    <section className={styles.recommendedMovies}>
        <div className={styles.recommendedMoviesInner}>
          <p
            href="#"
            className={`${styles.recommendedMoviesTitle} ${styles.mainTitle}`}
          >
            Recommended:
          </p>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
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
                slidesPerView: 4,
              },
              1190: {
                slidesPerView: 4,
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
