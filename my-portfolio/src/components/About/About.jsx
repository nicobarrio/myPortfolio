import './About.scss';
import Profile from './subcomponents/Profile/Profile.jsx';
import Bio from './subcomponents/Bio/Bio.jsx';

const About = (props) => {
    return (
        <div className="about">
            <Profile />
            <Bio />
        </div>
    )
}

export default About;