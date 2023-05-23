import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import styles from "./search.module.scss";

export function Search() {
  const [resultItems, setResultItems] = useState([]);

  const [genres, setGenres] = useState([]);

  const { register, control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const res = await getSearchResult({ title: data.title });
    setResultItems(res.results);
  };

  const fetchGenre = async () => {
    const res = await getGenres();
    setGenres(res.genres);
  };

  useEffect(() => {
    fetchGenre();
  }, []);

  return (
    <section className={styles.search}>
      <div className="container">
        <div className={styles.searchInner}>
          <p href="#" className={styles.searchTitle}>
            Search
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formRow}>
              <div className={styles.formCol}>
                <label htmlFor="title" className={styles.formLabel}>
                  Title
                </label>
                <input
                  id="title"
                  className={styles.formInput}
                  type="text"
                  {...register("title")}
                />
              </div>
              <div className={styles.formCol}>
                <label htmlFor="year" className={styles.formLabel}>
                  Year
                </label>
                <input
                  id="year"
                  className={styles.formInput}
                  type="text"
                  {...register("yearFrom")}
                />
                <input
                  className={styles.formInput}
                  type="text"
                  {...register("yearTo")}
                />
              </div>
            </div>
            <div className="formBtns">
              <button type="reset" className={styles.formBtnRes}>
                Clear filters
              </button>
              <button type="submit" className={styles.formBtnSub}>
                Show results
              </button>
            </div>
            <div className={styles.searchBody}>
              {resultItems.map((item) => (
                <MovieCard key={item.id} item={item} genres={genres} />
              ))}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

const MovieCard = ({ item, genres }) => {
  const genresList = item.genre_ids
    .map((genreId) => {
      return genres.find(({ id }) => id === genreId).name;
    })
    .join(", ");
  return (
    <div className={styles.item}>
      <img
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        alt="movie poster"
      />
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>{item.title}</p>
        <p className={styles.cardYear}>{item.release_date}</p>
        <p className={styles.cardAverage}>{item.vote_average.toFixed(1)}</p>
        <p className={styles.cardGenre}>{genresList}</p>
      </div>
    </div>
  );
};

async function getSearchResult({ title }) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzA0OGMyYjc1ZWFmNWNiYjNlM2FmMDM1ZTM5NWJkNyIsInN1YiI6IjY0NmI4NTU5NTRhMDk4MDE3MjhhYzg4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BZeGC1MhzMK5NF_F0AunEtKXDLyYURRTMnhkVBfg08c",
    },
  };
  const params = new URLSearchParams({
    include_adult: false,
    language: "en",
    query: title,
  });
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?${params}`,
      options
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}

async function getGenres() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzA0OGMyYjc1ZWFmNWNiYjNlM2FmMDM1ZTM5NWJkNyIsInN1YiI6IjY0NmI4NTU5NTRhMDk4MDE3MjhhYzg4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BZeGC1MhzMK5NF_F0AunEtKXDLyYURRTMnhkVBfg08c",
    },
  };
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      options
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}
