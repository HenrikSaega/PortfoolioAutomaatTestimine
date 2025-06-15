import { NavLink } from 'react-router-dom';
import "../styles/home.css"; 
import ResumeButton from '../utils/resumebutton';
const Home = () => {
    
  return (
    <>
      <div className="avaleht-content">
        <p className="no-select home-h1">HENRIK SAEGA</p>
        <p className='no-select welcome-p'>PORTFOLIO</p>
        <p className="no-select home-p">"You can make money with time, but you can't make time with money"</p>
      </div>
      <div className="forwarding">
        <NavLink to="/aboutme" className="button-link">About me</NavLink>
        <NavLink to="/projects" className="button-link">Projects</NavLink>
        <ResumeButton/>
      </div>
      <footer className="home_footer">
        <p>&copy; 2025 All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Home;