import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FaLinkedin, FaGithub, FaYoutube, FaDownload, FaEye, FaArrowRight } from 'react-icons/fa';
import { SiOrcid } from 'react-icons/si';
import mypic from '../Images/profile-hero.webp';

const ROLES = [
  'Software Developer',
  'AI Engineer',
  'Cloud Developer',
  'Full-Stack Developer',
];

function Home() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const roleIndex = useRef(0);

  const tick = useCallback(() => {
    const currentRole = ROLES[roleIndex.current];

    if (!isDeleting) {
      // Typing
      setDisplayText((prev) => currentRole.substring(0, prev.length + 1));
    } else {
      // Deleting
      setDisplayText((prev) => currentRole.substring(0, prev.length - 1));
    }
  }, [isDeleting]);

  useEffect(() => {
    const currentRole = ROLES[roleIndex.current];
    let speed;

    if (!isDeleting && displayText === currentRole) {
      // Finished typing — pause then start deleting
      speed = 1500;
      const timeout = setTimeout(() => setIsDeleting(true), speed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText === '') {
      // Finished deleting — move to next role
      setIsDeleting(false);
      roleIndex.current = (roleIndex.current + 1) % ROLES.length;
      speed = 300;
    } else {
      speed = isDeleting ? 50 : 100;
    }

    const timeout = setTimeout(tick, speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, tick]);

  return (
    <div className="hero-container" id="home">

      <div className="hero-content">

        {/* --- LEFT — PROFILE --- */}
        <aside className="hero-left">
          <div className="profile-card">

            <div className="avatar-wrap">
              <span className="avatar-aura" aria-hidden="true"></span>
              <div className="avatar-frame">
                <img
                  src={mypic}
                  alt="Naman Srivastava"
                  width="760"
                  height="936"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>

            <h1 className="profile-name">Naman Srivastava</h1>
            <span className="profile-role">
              {displayText}<span className="typewriter-cursor" aria-hidden="true">|</span>
            </span>

            <div className="social-row">
              <a href="https://linkedin.com/in/namansrivastavaaa" target="_blank" rel="noopener noreferrer" className="social-node" data-brand="linkedin" aria-label="Naman Srivastava on LinkedIn">
                <FaLinkedin aria-hidden="true" focusable="false" />
              </a>
              <a href="https://github.com/namansrivastavaaa" target="_blank" rel="noopener noreferrer" className="social-node" data-brand="github" aria-label="Naman Srivastava on GitHub">
                <FaGithub aria-hidden="true" focusable="false" />
              </a>
              <a href="https://www.youtube.com/@naman_0804/" target="_blank" rel="noopener noreferrer" className="social-node" data-brand="youtube" aria-label="Naman Srivastava on YouTube">
                <FaYoutube aria-hidden="true" focusable="false" />
              </a>
              <a href="https://orcid.org/0009-0007-1557-9333" target="_blank" rel="noopener noreferrer" className="social-node" data-brand="orcid" aria-label="Naman Srivastava ORCID profile">
                <SiOrcid aria-hidden="true" focusable="false" role="presentation" />
              </a>
            </div>

            <div className="quiet-divider"></div>

            <figure className="testimonial">
              <span className="testimonial-mark" aria-hidden="true">&ldquo;</span>
              <blockquote>
                He showed full interest in his tasks, followed instructions closely and
                brought sufficient knowledge to his role — a good intern in the company.
              </blockquote>
              <figcaption>
                <span className="testimonial-name">Srikrupa HD</span>
                <span className="testimonial-role">Data Analyst · Mentor at TEN</span>
                <span className="testimonial-date">August 12, 2024</span>
              </figcaption>
            </figure>

          </div>
        </aside>

        {/* --- RIGHT — ABOUT & CONTENT --- */}
        <section className="hero-right">
          <div className="about-card">

            <div className="content-block">
              <span className="eyebrow">Introduction</span>
              <h3 className="block-title">About Me</h3>
              <div className="about-copy">
                <p>
                  I'm a <span className="highlight dusk">Software Developer</span> with practical experience building across
                  <span className="highlight dusk"> Full-Stack Development</span>, <span className="highlight sage">DevOps</span>, <span className="highlight blue">MLOps</span>, and <span className="highlight rose">Cloud Development</span>, working with technologies such as
                  <span className="highlight amber"> AWS</span>, <span className="highlight blue">Docker</span>, <span className="highlight sage">Prometheus</span>, and <span className="highlight rose">Grafana</span>.
                </p>
                <p>
                  My recent focus has been on AI — developing LLM-powered applications and AI agents using
                  <span className="highlight rose"> LangChain</span> and <span className="highlight amber">LangGraph</span>, backed by strong fundamentals in
                  <span className="highlight sage"> Machine Learning, Deep Learning, and NLP</span>.
                </p>
                <p>
                  I thrive in fast-paced environments like <span className="highlight rose">hackathons</span>.
                  Finishing in the top 6 across 3 hackathons and being selected for <span className="highlight amber">SIH 2024</span> has pushed me to think on my feet, build fast, and stay creative.
                </p>

              </div>
            </div>

            <div className="content-block">
              <span className="eyebrow">Resume</span>
              <div className="info-row">
                <div className="info-row-main">
                  <h4>Naman — Resume</h4>
                  <p>ML · Cloud · Full-Stack</p>
                </div>
                <div className="info-row-actions">
                  <a
                    href="https://drive.google.com/file/d/1GT2cGCyLLkD9CqNMD3gDRPYPTpiLgZP8/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-btn outline"
                  >
                    <FaEye aria-hidden="true" focusable="false" /> View
                  </a>
                  <a
                    href="https://drive.google.com/uc?export=download&id=1GT2cGCyLLkD9CqNMD3gDRPYPTpiLgZP8"
                    className="pill-btn solid"
                  >
                    <FaDownload aria-hidden="true" focusable="false" /> Download
                  </a>
                </div>
              </div>
            </div>

            <div className="content-block">
              <span className="eyebrow">Interview Experiences</span>
              <div className="info-row">
                <div className="info-row-main">
                  <h4>Read My Interview Journey</h4>
                  <p>Notes from real interview rounds</p>
                </div>
                <div className="info-row-actions">
                  <a
                    href="https://interview.namansrivastava.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-btn solid"
                  >
                    Read now <FaArrowRight aria-hidden="true" focusable="false" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

export default Home;