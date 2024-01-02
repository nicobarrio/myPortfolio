import './Footer.css';
import MeetYou from './subcomponents/MeetYou/MeetYou.jsx';
import Links from './subcomponents/Links/Links.jsx'

const Footer = (props) => {
    return (
        <div className="footer">
            <MeetYou />
            <Links />
        </div>
    )
}

export default Footer;
