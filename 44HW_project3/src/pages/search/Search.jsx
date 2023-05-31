import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { MovieCard } from "../../components/card/MovieCard";
import { getGenres, getSearchResult } from "../../api/tmdb";
import { Loader } from "../../components/loader/Loader";

import styles from "./search.module.scss";

export default function Search() {
  let [searchParams] = useSearchParams();
  const title = searchParams.get("query");

  const [resultItems, setResultItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [genres, setGenres] = useState([]);

  const fetchSearchRes = useCallback(async () => {
    const res = await getSearchResult({ title: title });
    -setResultItems(res.results);
    setIsLoading(false);
  }, [title]);

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
      {isLoading && <Loader />}
      <div className="container">
        <div className={styles.searchInner}>
          <p href="#" className={`${styles.searchTitle} ${styles.mainTitle}`}>
            Search results: {title}
          </p>
          {isLoading && <Loader />}
          {resultItems.length === 0 && !isLoading && (
            <p>Unfortunately, nothing was found on the site.</p>
          )}
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
