import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
                <div>
                    <NavLink to="/profile" className={isActive => (!isActive ? styles.item : styles.item_act)}>Profile</NavLink>
                </div>
                <div>
                    <NavLink className={isActive => (!isActive ? styles.item : styles.item_act)} to="/dialogs">Messages</NavLink>
                </div>
                <div>
                    <NavLink className={isActive => (!isActive ? styles.item : styles.item_act)} to="/news">News</NavLink>
                </div>
                <div>
                    <NavLink className={isActive => (!isActive ? styles.item : styles.item_act)} to="/music">Music</NavLink>
                </div>
                <div>
                    <NavLink className={isActive => (!isActive ? styles.item : styles.item_act)} to="/settings">Settings</NavLink>
                </div>
        </nav>
    );
}
export default Navbar;