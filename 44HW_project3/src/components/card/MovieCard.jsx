import styles from "./card.module.scss";

export const MovieCard = ({ item, genres }) => {
    const genresList = item.genre_ids
      .map((genreId) => {
        return genres.find(({ id }) => id === genreId)?.name;
      })
      .join(", ");
    return (
      <div className={styles.cardItem}>
        <img className={styles.cardImg}
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt="movie poster"
        />
          <a className={styles.cardTitleLink} href="#"><p className={styles.cardTitle}>{item.title}</p></a>
        <div className={styles.cardContent}>
          <p className={styles.cardYear}>{item.release_date}</p>
          <p className={styles.cardAverage}>{item.vote_average.toFixed(1)}</p>
        </div>
          <p className={styles.cardGenre}>{genresList}</p>
      </div>
    );
  };