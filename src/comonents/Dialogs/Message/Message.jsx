import styles from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={styles.message}>{props.message.message}</div>
    )
}

export default Message;