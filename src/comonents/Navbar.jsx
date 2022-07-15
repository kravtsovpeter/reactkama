import styles from '../styles/Navbar.module.css'
const Navbar = () => {
    return (<nav className={styles.nav}>
        <div>
            <a className={styles.item} href="http://ya.ru">Profile</a>
        </div>
        <div>
            <a className={`${styles.item} ${styles.active}`} href="http://ya.ru">Messages</a>
        </div>
        <div>
            <a className={styles.item} href="http://ya.ru">News</a>
        </div>
        <div>
            <a className={styles.item} href="http://ya.ru">Music</a>
        </div>
        <div>
            <a className={styles.item} href="http://ya.ru">Settings</a>
        </div>
    </nav>);
}
export default Navbar;