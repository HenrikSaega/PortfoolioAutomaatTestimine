import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';
import { ReactComponent as Logo } from "../pics/Logo2.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClass = `navigation-menu ${scrolled && !hovered ? 'navigation-menu-small' : ''}`;

  return (
    <header 
      className={headerClass} 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
    >
      <nav className="nav-buttons">
        <NavLink className="no-select header_a"  to="/" exact="true" activeClassName="active">HOME</NavLink>
        <NavLink className="no-select header_a"  to="/aboutme" activeclassname="active">ABOUT ME</NavLink>
        <Logo className='logo no-select' />
        <NavLink className="no-select header_a"  to="/projects" activeclassname="active">PROJECTS</NavLink>
        <NavLink to="/contact" activeclassname="active" className="header_a">CONTACT</NavLink>
      </nav>
    </header>
  );
};

export default Header;
