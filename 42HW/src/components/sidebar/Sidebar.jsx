import Dashboard from "../icons/Dashboard";
import Sales from "../icons/Sales";
import Catalog from "../icons/Catalog";
import Custumers from "../icons/Custumers";
import Reviews from "../icons/Reviews";
import styles from "./sidebar.module.scss";


export function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <ul className={styles.sidebarList}>
                <li className={styles.sidebarItem}>
                    <a href="#" className={styles.sidebarLink}><Dashboard />Dashboard</a>
                </li>
                <li className={styles.sidebarItem}>
                    <a href="#" className={styles.sidebarLink}><Sales />sales</a>
                </li>
                <li className={styles.sidebarItem}>
                    <a href="#" className={styles.sidebarLink}><Catalog />catalog</a>
                </li>
                <li className={styles.sidebarItem}>
                    <a href="#" className={styles.sidebarLink}><Custumers />custumers</a>
                </li>
                <li className={styles.sidebarItem}>
                    <a href="#" className={styles.sidebarLink}><Reviews />reviews</a>
                </li>
            </ul>
        </div>
    )
}