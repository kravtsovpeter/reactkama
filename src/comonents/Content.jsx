import styles from '../styles/Content.module.css'
const Content = () => {
    return (<div className={styles.content}>
        <div><img src="https://www.w3schools.com/css/img_5terre_wide.jpg"/></div>
        <div>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZyOEOIqQRPWXoZZN-jOfPpudGsx7aMfRzlg&usqp=CAU"/>
        </div>
        <div>
            MyPosts
            <div>
                New Post
            </div>
            <div>
                <div className={styles.item}>Post 1</div>
                <div className={styles.item}>Post 2</div>
                <div className={styles.item}>Post 3</div>
                <div className={styles.item}>Post 4</div>
            </div>
        </div>
    </div>)
}
export default Content;