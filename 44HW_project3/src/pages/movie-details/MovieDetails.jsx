import { useParams } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";

import { changeMinToHour } from "../../utils/time-format";

import { getMovieDetails } from "../../api/tmdb";

import styles from "./movieDetails.module.scss";

export default function MovieDetails() {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState();

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
  }, [movieId]);

  useEffect(() => {
    fetchMovieDetails();
  }, [fetchMovieDetails]);

  return (
    movieDetails && (
      <section className={styles.movieDetails}>
        <img
          className={styles.movieDetailsBgImg}
          src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
          alt="Movie background"
        />
        <div className="container">
          <div className={styles.movieDetailsInner}>
            <div className="contentSection">
              <img
                className={styles.posterImg}
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                alt="Movie poster"
              />
            </div>
            <div className="contentSection">
              <p className="movieTitle">{movieDetails.title}</p>
              <div className="movieInfo">
                <p className="movieReleaseDate">{movieDetails.release_date}</p>
                <p className="movieGenre">{genresList}</p>
                <p className="movieTime">{changeMinToHour(movieDetails.runtime)}</p>
                <p className="movieData">{movieDetails.vote_average.toFixed(2)}</p>
              </div>
              <p className="movieTagline">{movieDetails.tagline}</p>
              <p className="movieOverview">{movieDetails.overview}</p>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
