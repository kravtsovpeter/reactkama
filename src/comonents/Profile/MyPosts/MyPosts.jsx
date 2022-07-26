import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <h3>MyPosts</h3>
            <Post message="Hello world" likes="3"/>
            <Post message="My props using" likes="5"/>
            <Post message="Bla bla blashechki" likes="6"/>
        </div>)
}
export default MyPosts;