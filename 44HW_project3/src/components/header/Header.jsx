import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Switch } from "@headlessui/react";
import { Link, useNavigate, useSearchParams, NavLink } from "react-router-dom";

import { ThemeContext } from "../../providers/ThemeProvider";

import styles from "./header.module.scss";

export function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [isFormOpen, setIsFormOpen] = useState(false);

  let [searchParams] = useSearchParams();
  let navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: searchParams.get("query") ?? "",
    },
  });

  const onSubmit = async (data) => {
    if (data.title) {
      navigate(`/search?query=${data.title}`);
      setIsFormOpen(false);
    }
  };

  const handleNavigate = () => {
    reset({ title: "" });
  };

  const handleFormToggle = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <Link className={styles.headerLogo} to="/" onClick={handleNavigate}>
            Movies search
          </Link>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `${isActive ? "active" : ""} ${styles.headerLink}`
            }
            onClick={handleNavigate}
          >
            Movies
          </NavLink>

          <div className={styles.headerRightSide}>
            <Switch
              checked={!theme}
              onChange={toggleTheme}
              className={`${!theme ? styles.toggleDark : styles.toggleLight} ${
                styles.toggle
              }`}
            >
              <span
                className={`${
                  !theme ? styles.toggleCircleOn : styles.toggleCircleOff
                } ${styles.toggleCircle}`}
              />
            </Switch>
            <button className={styles.headerBurger} onClick={handleFormToggle}>
              <div
                className={`${styles.burgerIcon} ${
                  isFormOpen ? styles.open : ""
                }`}
              >
                <span className={styles.bar} />
                <span className={styles.bar} />
                <span className={styles.bar} />
              </div>
            </button>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={`${styles.headerForm} ${isFormOpen ? "open" : ""}`}
            >
              <input
                id="title"
                className={styles.headerInput}
                type="text"
                placeholder="Search for a movie.."
                {...register("title")}
              />
              <button type="submit" className={styles.headerBtn}>
                Show results
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
