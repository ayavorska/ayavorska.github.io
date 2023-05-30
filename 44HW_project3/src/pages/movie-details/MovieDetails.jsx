import { useParams } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";

import { changeMinToHour } from "../../utils/time-format";
import RecommendedMovies from "./RecommendedMovies";
import { getMovieDetails } from "../../api/tmdb";
import { Loader } from "../../components/loader/Loader";

import styles from "./movieDetails.module.scss";

export default function MovieDetails() {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const genresList = movieDetails
    ? movieDetails.genres
        .map((genreItem) => {
          return genreItem.name;
        })
        .join(", ")
    : "";

  const fetchMovieDetails = useCallback(async () => {
    const res = await getMovieDetails({ movieId: movieId });
    setMovieDetails(res);
    setIsLoading(false)
  }, [movieId]);

  useEffect(() => {
    fetchMovieDetails();
  }, [fetchMovieDetails]);

  return (
    movieDetails && (
      <section className={styles.movieDetails}>
          {isLoading && <Loader />}
        <img
          className={styles.movieDetailsBgImg}
          src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
          alt="Movie background"
        />
        <div className="container">
          <div className={styles.movieDetailsInner}>
            <div className={styles.contentSection}>
              <img
                className={styles.posterImg}
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                alt="Movie poster"
              />
            </div>
            <div className={`${styles.contentSection} ${styles.flex_gap}`}>
              <div className={styles.contentSectionBg}>
                <p className={styles.movieTitle}>{movieDetails.title}</p>
                <div className={styles.movieInfo}>
                  <p
                    className={`${styles.movieReleaseDate} ${styles.bg_orange}`}
                  >
                    {movieDetails.release_date}
                  </p>
                  <p className={`${styles.movieGenre} ${styles.bg_orange}`}>
                    {genresList}
                  </p>
                  <p className={`${styles.movieTime} ${styles.bg_orange}`}>
                    {changeMinToHour(movieDetails.runtime)}
                  </p>
                  <p className={`${styles.movieData} ${styles.bg_orange}`}>
                    {movieDetails.vote_average.toFixed(2)}
                  </p>
                </div>
                <p className={styles.movieTagline}>{movieDetails.tagline}</p>
                <p className={styles.movieOverview}>{movieDetails.overview}</p>
              </div>
              <div className={styles.contentSectionBg}>
                <RecommendedMovies movieId={movieId} />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
