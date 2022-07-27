import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {

    let dialogItems = [
        {id: "1", name: "Vasya"},
        {id: "2", name: "Marinel"},
        {id: "3", name: "Olich"},
        {id: "4", name: "Sandro"},
        {id: "5", name: "Pyatro"}
    ]

    let messages = [
        {message: "Hello, how are you?"},
        {message: "Let's running together"},
        {message: "We are the champions"}
    ]
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <DialogItem item={dialogItems[0]}/>
                <DialogItem item={dialogItems[1]}/>
                <DialogItem item={dialogItems[2]}/>
                <DialogItem item={dialogItems[3]}/>
                <DialogItem item={dialogItems[4]}/>
            </div>
            <div className={styles.messages}>
                <Message message={messages[0]}/>
                <Message message={messages[1]}/>
                <Message message={messages[2]}/>
            </div>
        </div>
    )
}
export default Dialogs;