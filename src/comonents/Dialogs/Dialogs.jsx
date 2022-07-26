import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <DialogItem name="Vasya" id="1" />
                <DialogItem name="Marina" id="2" />
                <DialogItem name="Olga" id="3" />
                <DialogItem name="Sasha" id="4" />
                <DialogItem name="Peter" id="5" />
            </div>
            <div className={styles.messages}>
                <Message message="Hello, how are you?"/>
                <Message message="Let's running together"/>
                <Message message="We are the champions"/>
            </div>
        </div>
    )
}
export default Dialogs;