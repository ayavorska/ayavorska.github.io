import { useForm } from "react-hook-form";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import styles from "./header.module.scss";

export function Header() {
  const [enabled, setEnabled] = useState(false);

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
    }
  };

  const handleNavigate = () => {
    reset({ title: "" });
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <Link className={styles.headerLogo} to="/" onClick={handleNavigate}>
            Movie search
          </Link>

          <div className={styles.headerRightSide}>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? styles.toggleDark : styles.toggleLight
            } ${styles.toggle}`}
          >
            <span
              className={`${
                enabled ? styles.toggleCircleOn : styles.toggleCircleOff
              } ${styles.toggleCircle}`}
            />
          </Switch>
          <form onSubmit={handleSubmit(onSubmit)}>
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
