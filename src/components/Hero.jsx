import React, { useState, useEffect } from 'react';
import './Hero.css';
import profilePic from '../pfp.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  

  useEffect(() => {
    const words = ["Software Engineer.", "Gearhead.", "Gamer.", "Philosopher."];
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullWord = words[i];

      // Determine the next combination of strings char to show
      setText(isDeleting 
        ? fullWord.substring(0, text.length - 1) 
        : fullWord.substring(0, text.length + 1)
      );

      // Adjust speed
      setTypingSpeed(isDeleting ? 90 : 200);

      // Logic for switching between typing and deleting
      if (!isDeleting && text === fullWord) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause at the end of the word
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-split">
          
          {/* LEFT SIDE: Text & Buttons */}
          <div className="hero-left">
            <p className="hero-greeting">Hey! I am</p>
            <h1 className="hero-name">Arunesh Prasad</h1>
            <h2 className="hero-title">
              I'm a <span className="typewriter">{text}</span>
              <span className="cursor">|</span>
            </h2>
            <div className="hero-btns">
              <a href="https://shorturl.at/UWOcI" target="_blank" rel="noreferrer" className="btn-resume">View Resume</a>
              {/* <a href="#contact" className="btn-contact">Contact Me</a> */}
            </div>
          </div>

          {/* RIGHT SIDE: Profile Picture */}
          <div className="hero-right">
            <div className="image-wrapper">
              <img src={profilePic} alt="Arunesh Prasad" className="profile-img" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;