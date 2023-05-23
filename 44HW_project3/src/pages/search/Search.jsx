import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../../components/card/MovieCard";
import styles from "./search.module.scss";

export default function Search() {
  let [searchParams] = useSearchParams();

  const [resultItems, setResultItems] = useState([]);

  const [genres, setGenres] = useState([]);

  const fetchSearchRes = useCallback(async () => {
    const title = searchParams.get("query");
    const res = await getSearchResult({ title: title });
    setResultItems(res.results);
  }, [searchParams]);

  const fetchGenre = async () => {
    const res = await getGenres();
    setGenres(res.genres);
  };

  useEffect(() => {
    fetchSearchRes();
  }, [fetchSearchRes]);

  useEffect(() => {
    fetchGenre();
  }, []);

  return (
    <section className={styles.search}>
      <div className="container">
        <div className={styles.searchInner}>
          <p href="#" className={styles.searchTitle}>
            Search results:
          </p>
          <div className={styles.searchBody}>
            {resultItems.map((item) => (
              <MovieCard key={item.id} item={item} genres={genres} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
