import './Header.css';
import Welcome from './subcomponents/Welcome/Welcome.jsx';
import Navbar from './subcomponents/Navbar/Navbar.jsx'

const Header = (props) => {
    return (
        <div className="header">
            <Welcome />
            <Navbar />
        </div>
    )
}

export default Header;
