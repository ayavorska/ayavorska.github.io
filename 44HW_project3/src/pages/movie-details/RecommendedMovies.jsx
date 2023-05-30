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
