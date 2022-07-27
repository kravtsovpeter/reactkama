import styles from './Post.module.css'

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqndM0FY90ceDASfwkNVB369izhpfcHw9Dtg&usqp=CAU"/>
            <div>{props.post.message}</div>
            <div>
                <span>Like {props.post.likes}</span>
            </div>
        </div>
    )

}
export default Post;