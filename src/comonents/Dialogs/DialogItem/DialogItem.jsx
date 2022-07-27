import {NavLink} from "react-router-dom";
import styles from "./DialogItem.module.css";

const DialogItem = (props) => {
    return (
        <div>
            <NavLink className={isActive => (!isActive ? styles.dialog : styles.active)}
                     to={'/dialogs/' + props.item.id}>{props.item.name}</NavLink>
        </div>
    )
}

export default DialogItem;