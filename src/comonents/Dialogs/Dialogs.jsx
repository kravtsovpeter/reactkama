import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {

    let dialogData= [
        {id: "1", name: "Vasya"},
        {id: "2", name: "Marinel"},
        {id: "3", name: "Olich"},
        {id: "4", name: "Sandro"},
        {id: "5", name: "Pyatro"}
    ]
    let dialogItems = dialogData.map(d => <DialogItem item={d}/>)

    let messageData = [
        {message: "Hello, how are you?"},
        {message: "Let's running together"},
        {message: "We are the champions"}
    ]
    let messages = messageData.map(m => <Message message={m}/>)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogItems}
            </div>
            <div className={styles.messages}>
                {messages}
            </div>
        </div>
    )
}
export default Dialogs;