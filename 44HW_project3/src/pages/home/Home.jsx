import { Link } from "react-router-dom";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className="container">
        <h1 className={styles.homeTitle}>trending</h1>
      </div>
    </section>
  );
}
