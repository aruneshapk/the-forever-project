import React, { useState, useEffect } from 'react';
import './Hero.css';
import profilePic from '../pfp.jpg';

const WORDS = ["Software Engineer.", "Gearhead.", "Gamer.", "Philosopher."];

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % WORDS.length;
      const fullWord = WORDS[i];

      setText(isDeleting
        ? fullWord.substring(0, text.length - 1)
        : fullWord.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 90 : 200);

      if (!isDeleting && text === fullWord) {
        setTimeout(() => setIsDeleting(true), 1000);
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

          {/* LEFT: Text & Buttons */}
          <div className="hero-left">
            <p className="hero-greeting">Hey! I am</p>
            <h1 className="hero-name">Arunesh Prasad</h1>
            <h2 className="hero-title">
              I'm a <span className="typewriter">{text}</span>
              <span className="cursor">|</span>
            </h2>
            <div className="hero-btns">
              <a
                href="http://tiny.cc/ap_cv"
                target="_blank"
                rel="noreferrer"
                className="btn-resume"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* RIGHT: Profile Picture */}
          <div className="hero-right">
            <div className="image-wrapper">
              <img src={profilePic} alt="Arunesh Prasad" className="profile-img" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
