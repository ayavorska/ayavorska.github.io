import styles from "./header.module.scss";

export function Header() {
  
    return (
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerInner}>
            <a href="#" className={styles.headerLogo}>
              Movie search 
            </a>
          </div>
        </div>
      </header>
    );
  }