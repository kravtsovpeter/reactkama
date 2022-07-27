import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {message:"Hello world", likes: "3"},
        {message:"My props using", likes: "5"},
        {message:"Bla bla blashechki", likes: "6"}
    ]
    return (
        <div>
            <h3>MyPosts</h3>
            <Post post={posts[0]}/>
            <Post post={posts[1]}/>
            <Post post={posts[2]}/>
        </div>)
}
export default MyPosts;