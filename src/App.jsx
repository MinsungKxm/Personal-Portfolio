import { useState } from 'react'
import './App.css'
import ProjectCard from "./components/ProjectCard.jsx";
import AboutSection from './components/AboutSection'
import InfoCard from "./components/InfoCard.jsx";
import profileImg from "./assets/Me.PNG";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header className="site-nav">
        <div className="logo">
          Minsung <span className="accent"> Kim</span>
        </div>

        <nav className="links">
          <a href="#" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-right">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M20.8 8.6c0-3.1-2.5-5.4-5.4-5.4-1.8 0-3.4.9-4.4 2.3-1-1.4-2.6-2.3-4.4-2.3-2.9 0-5.4 2.3-5.4 5.4 0 6 9.8 11.8 9.8 11.8s9.8-5.8 9.8-11.8z"/>
          </svg>
          <span>3</span>
        </div>
      </header>

      <section className="hero">
        <div className="hero-watermark">MK</div>

        <div className="hero-content">
          <div className="avatar-wrap">
            <div className="avatar">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 8a2 2 0 0 1 2-2h1.2l.9-1.5A1.5 1.5 0 0 1 9.4 3.7h5.2a1.5 1.5 0 0 1 1.3.8L16.8 6H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z"/>
                <circle cx="12" cy="13" r="3.4"/>
              </svg>
              <span>
                <img src={profileImg} alt="Minsung Kim" />
              </span>
            </div>
          </div>

          <div className="role-pill">
            Computer Science Student • University of Toronto
          </div>

          <h1 className="headline">
            Building practical software
            <br />
            that solves real problems.
          </h1>

          <p className="subtext">
            I'm a second-year Computer Science student at the University of Toronto
            with an interest in full-stack web development, UI/UX design, and
            building software that makes everyday tasks easier.
          </p>

          <div className="cta-row">
            <a href="#" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16"/>
              </svg>
              Download CV
            </a>

            <a href="#projects" className="btn btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/>
              </svg>
              My Projects
            </a>
          </div>

          <div className="social-row">
            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>

            <a href="#" aria-label="GitHub">
              GitHub
            </a>

            <a href="#" aria-label="Email">
              Email
            </a>
          </div>
        </div>

        <div className="scroll-tick"></div>
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects" className="projects">
        <h2 className="projects-heading">My Projects</h2>

        <div className="projects-grid">
          <ProjectCard
            image="https://placehold.co/600x375/1d1e22/6c6e75?text=Student+Life+Tracker"
            title="UofT Student Life Tracker"
            description="A full-stack web application that helps University of Toronto students organize schedules, deadlines, and campus resources. Built with React, Express.js, PostgreSQL, and deployed on Render."
            link="https://uoft-student-life-tracker.onrender.com/"
          />

          <ProjectCard
            image="https://placehold.co/600x375/1d1e22/6c6e75?text=Portfolio"
            title="Personal Portfolio Website"
            description="A responsive portfolio website built with React to showcase my projects, technical skills, and experience while learning modern frontend development."
            link="#"
          />

          <ProjectCard
            image="https://placehold.co/600x375/1d1e22/6c6e75?text=Coming+Soon"
            title="More Projects Coming Soon"
            description="I'm continuously building new software projects to strengthen my skills in web development, software engineering, and computer science."
            link="#"
          />
        </div>
      </section>
      <section id="experience" className="experience">
        <h2 className="projects-heading">Experience & Education</h2>

        <div className="projects-grid">
          <InfoCard
            category="Experience"
            title="ResNet Technical Assistant"
            subtitle="University of Toronto"
            date="May 2026 – Present"
            description="Provide technical support for students experiencing network connectivity issues, including Wi-Fi, Ethernet, and device registration. Troubleshoot campus internet problems while delivering professional customer service."
          />

          <InfoCard
            category="Education"
            title="University of Toronto"
            subtitle="Honours B.Sc. Computer Science Specialist"
            date="Expected Graduation: 2029"
            description="Currently pursuing a Computer Science Specialist at the University of Toronto, with interests in full-stack software development, UI/UX design, and artificial intelligence."
          />

          <InfoCard
            category="Award"
            title="International Scholar Award"
            subtitle="University of Toronto"
            date="$50,000 Entrance Scholarship"
            description="Awarded a $50,000 entrance scholarship in recognition of strong academic achievement and leadership."
          />
        </div>
      </section>
    </div>
  )
}

export default App