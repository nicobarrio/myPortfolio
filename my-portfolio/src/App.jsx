import './App.scss';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx'
import Footer from './components/Footer/Footer.jsx';
import Projects from './components/Projects/Projects.jsx'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App () {
    return (
        <div>
            <Header />
            <Projects />
            <About />
            <Footer />    
        </div>
    );
}

export default App;