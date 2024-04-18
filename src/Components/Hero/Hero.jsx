import React, { useEffect, useState } from 'react';
import './Hero.css';
import github_icon from '../../assets/github-icon.png';
import instagram_icon from '../../assets/instagram-icon.png';
import linkedin_icon from '../../assets/linkedin-icon.png';
import twitter_icon from '../../assets/twitter-icon.png';

const Hero = () => {
  const [showDeveloper, setShowDeveloper] = useState(true);
  const [showDesigner, setShowDesigner] = useState(false);
  const [showThirdText, setShowThirdText] = useState(false); // New state for the third text

  useEffect(() => {
    // After a delay, hide developer text, show designer text, and then show third text
    const timer1 = setTimeout(() => {
      setShowDeveloper(false);
      setShowDesigner(true);
    }, 3000); // Adjust the delay as needed

    const timer2 = setTimeout(() => {
      setShowDesigner(false);
      setShowThirdText(true);
    }, 6000); // Adjust the delay for the third text

    // Clean up timers
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className='hero container'>
      <div className='icons'>
        <a href="https://github.com/HimashBandaragit"><img src={github_icon} alt='GitHub' className='github-img'/></a>
        <a href="https://www.linkedin.com/in/himash-bandara-a84011267/"><img src={linkedin_icon} alt='LinkedIn' className='linkedin-img'/></a>
        <a href="https://twitter.com/yourtwitterusername"><img src={twitter_icon} alt='Twitter' className='twitter-img'/></a>
        <a href="https://www.instagram.com/yourinstagramusername"><img src={instagram_icon} alt='Instagram' className='instagram-img'/></a>
      </div>

      <div className="hero-text">
        <h1>HELLO SAMURAI</h1>
        <h2>I am Himash Bandara</h2>
        <h3>I am a</h3>
        {showDeveloper && <h3 className="typewriter">developer</h3>}
        {showDesigner && <h3 className="typewriter">designer</h3>}
        {showThirdText && <h3 className="typewriter">Gamer</h3>} {/* Render the third text when showThirdText is true */}
      </div>
    </div>
  );
};

export default Hero;
