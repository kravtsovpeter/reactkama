import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPost from "./NewPost/NewPost";

const Profile = () => {
    return (<div>
        <ProfileInfo />
        <NewPost />
        <MyPosts/>
    </div>)
}
export default Profile;