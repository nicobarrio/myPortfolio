import './Profile.css';
import ProfilePicture from '../../../../assets/profile.jpg'

const Profile = (props) => {
    return (
        <div className="profile">
           <img src={ProfilePicture} alt=""/>
        </div>
    )
}

export default Profile;