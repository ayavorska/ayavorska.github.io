import { useCallback, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { Listbox } from "@headlessui/react";

import { MovieCard } from "../../components/card/MovieCard";
import { getGenres, getMovies } from "../../api/tmdb";
import { Loader } from "../../components/loader/Loader";

import styles from "./movies.module.scss";

export default function Movies() {
  const [resultItems, setResultItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({});

  const [genres, setGenres] = useState([]);

  let [searchParams] = useSearchParams();
  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: {
      title: searchParams.get("query") ?? "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    setFilters(data);
  };

  const fetchMovies = useCallback(async () => {
    const res = await getMovies(filters);
    setResultItems(res.results);
    setIsLoading(false);
  }, [filters]);

  const fetchGenre = async () => {
    const res = await getGenres();
    setGenres(res.genres);
  };

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  useEffect(() => {
    fetchGenre();
  }, []);

  return (
    <section className={styles.movies}>
      {isLoading && <Loader />}
      <div className="container">
        <p className={`${styles.moviesTitle} ${styles.mainTitle}`}>Movies:</p>
        <div className={styles.moviesInner}>
          {isLoading && <Loader />}
          <div className={styles.moviesSidebar}>
            <form
              className={styles.movieFilterForm}
              onSubmit={handleSubmit(onSubmit)}
            >
              <legend className={styles.formTitle}>Filter</legend>
              <div className={styles.formRow}>
                <label htmlFor="year">Year:</label>
                <input
                  className={styles.formInput}
                  id="year"
                  type="text"
                  {...register("year")}
                />
              </div>

              <div className={styles.formRow}>
                <label htmlFor="genres" className={styles.searchInner}>
                  Genres:
                </label>

                <Controller
                  control={control}
                  name="genres"
                  render={({ field: { onChange, value } }) => (
                    <Listbox value={value} onChange={onChange}  multiple>
                      <div className={styles.listboxBody}>
                        <Listbox.Button className={styles.formListboxBtn}>
                          {value ? value.map((genre) => genre.name).join(", ") : "Any genres"}
                        </Listbox.Button>
                        <Listbox.Options  className={styles.formListboxOptions}>
                          {genres.map((genre) => {
                            const isSelected = value?.find(
                              (item) => item.id === genre.id
                            );
                            return (
                              <Listbox.Option
                                className={`${styles.formListboxOption} ${
                                  isSelected
                                    ? styles.formListboxOptionActive
                                    : ""
                                }`}
                                key={genre.id}
                                value={genre}
                              >
                                {genre.name}
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </div>
                    </Listbox>
                  )}
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formCol}>
                  <div className={styles.formVoteAver}>
                    <label htmlFor="voteAverageGte">Vote(min):</label>
                    <input
                      className={styles.formInput}
                      type="number"
                      {...register("voteAverageGte")}
                      min={0}
                      max={10}
                    />
                  </div>
                  <div className={styles.formVoteAver}>
                    <label htmlFor="voteAverageLte">Vote(max):</label>
                    <input
                      className={styles.formInput}
                      type="number"
                      {...register("voteAverageLte")}
                      min={0}
                      max={10}
                    />
                  </div>
                </div>
              </div>
              <button className={styles.formBtn} type="submit">
                Filter
              </button>
              <button className={styles.formBtnRes} onClick={() => reset()}>
                Reset filter
              </button>
            </form>
          </div>
          <div className={styles.moviesContent}>
            {resultItems.map((item) => (
              <MovieCard key={item.id} item={item} genres={genres} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
