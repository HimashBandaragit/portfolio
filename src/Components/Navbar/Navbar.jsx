import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${scrolling ? 'scrolling' : ''}`}>
      <ul>
        <li>HOME</li>
        <li>SKILLS</li>
        <li>PROJECTS</li>
        <li>CONTACT ME</li>
      </ul>
    </nav>
  );
};

export default Navbar;
