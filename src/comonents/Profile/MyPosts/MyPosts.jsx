import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {message:"Hello world", likes: "3"},
        {message:"My props using", likes: "5"},
        {message:"Bla bla blashechki", likes: "6"}
    ]

    let posts = postData.map(p => <Post post={p}/>)
    return (
        <div>
            <h3>MyPosts</h3>
            {posts}
        </div>)
}
export default MyPosts;