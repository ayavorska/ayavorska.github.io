import { useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import styles from "./header.module.scss";

export function Header() {
  let [searchParams] = useSearchParams();
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm({defaultValues: {
    title: searchParams.get('query') ?? '',
  }});
  const onSubmit = async (data) => {
    if (data.title) {
      navigate(`/search?query=${data.title}`)
    }
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <Link className={styles.headerLogo} to="/">
            Movie search
          </Link>
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
    </header>
  );
}
