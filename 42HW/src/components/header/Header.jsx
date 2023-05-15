import { useState } from "react";
import UserIcon from "../icons/UserIcon";
import styles from "./header.module.scss";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <div className={styles.headerBurger}>
            <div className={styles.menuToggle}>
              <button
                className={styles.burgerBtnOpen}
                aria-label="Burger button open"
                onClick={() => setIsMenuOpen((prevState) => !prevState)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <nav className={styles.headerNav}>
                <ul
                  className={`${styles.navList} ${isMenuOpen ? "is-open" : ""}`}
                >
                  <button
                    className={styles.burgerBtnClose}
                    aria-label="Burger button close"
                    onClick={() => setIsMenuOpen((prevState) => !prevState)}
                  >
                    <span></span>
                    <span></span>
                  </button>
                  <li className={styles.navItem}>
                    <a href="#" className={styles.navLink}>
                      Sales
                    </a>
                  </li>
                  <li className={styles.navItem}>
                    <a href="#" className={styles.navLink}>
                      Catalog
                    </a>
                  </li>
                  <li className={styles.navItem}>
                    <a href="#" className={styles.navLink}>
                      Customers
                    </a>
                  </li>
                  <li className={styles.navItem}>
                    <a href="#" className={styles.navLink}>
                      Review
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <a href="#" className={styles.headerLogo}>
            ~Posters galore~
          </a>
          <button className={styles.userBtn}>
            <UserIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
