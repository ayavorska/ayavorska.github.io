import { Link } from "react-router-dom";

import styles from "./card.module.scss";

export const MovieCard = ({ item, genres }) => {
  const genresList = genres
    ? item.genre_ids
        .map((genreId) => {
          return genres.find(({ id }) => id === genreId)?.name;
        })
        .join(", ")
    : "";
  return (
    <div className={styles.cardItem}>
      <Link className={styles.cardImgLink} to={`/movie/${item.id}`}>
        <img
          className={styles.cardImg}
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt="movie poster"
        />
      </Link>

      <Link className={styles.cardTitleLink} to={`/movie/${item.id}`}>
        <p className={styles.cardTitle}>{item.title}</p>
      </Link>

      <div className={styles.cardContent}>
        <p className={styles.cardYear}>{item.release_date}</p>
        <p className={styles.cardAverage}>{item.vote_average.toFixed(1)}</p>
      </div>
      {genres && <p className={styles.cardGenre}>{genresList}</p>}
    </div>
  );
};
