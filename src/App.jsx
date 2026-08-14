import { useState } from 'react'
import './App.css'
import ProjectCard from "./components/ProjectCard.jsx";
import AboutSection from './components/AboutSection'
import InfoCard from "./components/InfoCard.jsx";
import profileImg from "./assets/Me.PNG";
import UofTImage from "./assets/UofT.png";
import StarImage from "./assets/Constellation.jpg";
import resume from "./assets/Resume.pdf";
import FightImage from "./assets/fight.png.webp";

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
        </nav>
      </header>

      <section className="hero">

        <div className="hero-content">
          <div className="avatar-wrap">
            <div className="avatar">
                <img src={profileImg} alt="Minsung Kim" />
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
            <a href={resume} download="Minsung's Resume" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16"/>
              </svg>
              Download Resume
            </a>

            <a href="#projects" className="btn btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/>
              </svg>
              My Projects
            </a>
          </div>

          <div className="social-row">
            <a href="https://www.linkedin.com/in/minsung-kim-ab5552340/" aria-label="LinkedIn">
              LinkedIn
            </a>

            <a href="https://github.com/MinsungKxm" aria-label="GitHub">
              GitHub
            </a>
            <a 
              href="mailto:minsungk101@gmail.com?subject=Portfolio%20Contact"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>

        <div className="scroll-tick"></div>
      </section>

      <section id="about">
        <AboutSection />
      </section>


     <section id="education" className="education">
  <h2 className="projects-heading">Education</h2>

  <div className="projects-grid education-grid">
    <InfoCard
      category="Education"
      title="University of Toronto"
      subtitle="Honours B.Sc. Computer Science Specialist"
      date="Expected Graduation: 2029"
      description="Currently pursuing a Computer Science Specialist at the University of Toronto, with interests in full-stack software development, UI/UX design, and artificial intelligence. Awarded the International Scholar Award, a $50,000 entrance scholarship from the University of Toronto, in recognition of strong academic achievement and leadership."
    />
  </div>
</section>

      <section id="experience" className="experience">
        <h2 className="projects-heading">Experience</h2>

        <div className="projects-grid">
          <InfoCard
            category="Experience"
            title="ResNet Technical Assistant"
            subtitle="University of Toronto"
            date="May 2026 – Present"
            description="Provide technical support for students experiencing network connectivity issues, including Wi-Fi, Ethernet, and device registration. Troubleshoot campus internet problems while delivering professional customer service."
          />
          <InfoCard
            category="Experience"
            title="Hack Canada "
            subtitle="SPUR Innovation"
            date="March 2026"
            description="Participated in Hack Canada, a 36-hour hackathon focused on solving real Canadian challenges. Built Transit Guardian, a full-stack AI safety monitoring system using React, FastAPI, WebSockets, and YOLOv8-Pose to detect hazards from live camera feeds and provide real-time incident alerts."
          />
          <InfoCard
            category="Experience"
            title="Hack the Student Life 2026"
            subtitle="AWS Services"
            date="Placeholder Date"
            description="Our team participated in the Hack the Student Life hackathons, hosted by UofT and AWS services. The theme of the hackathon was solving a problem that can help UofT students or staff using AWS. We created Cluster Grade AI, where the teaching staff, like TAs, can input several works from students to identify the most common errors and where they are, saving time on their grading."
          />
        </div>
      </section>

      <section id="projects" className="projects">
        <h2 className="projects-heading">My Projects</h2>

        <div className="projects-grid">
          <ProjectCard
            image={UofTImage}
            title="UofT Student Life Tracker"
            description="A full-stack web application that helps University of Toronto students organize schedules, deadlines, and campus resources. Built with React, Express.js, PostgreSQL, and deployed on Render."
            link="https://uoft-student-life-tracker.onrender.com/"
          />

          <ProjectCard
            image={StarImage}
            title="Constellation Maker"
            description="A responsive portfolio website built with React to showcase my projects, technical skills, and experience while learning modern frontend development. It was created as a culminating assignment for my UofT course CSC111. Once deployed, it will show you a random array of stars that you must plot to create an existing constellation."
            link="https://github.com/MinsungKxm/Constellation-Maker"
          />

          <ProjectCard
            image={FightImage}
            title="WatchLine"
            description="Built a full-stack AI safety monitoring system with React, FastAPI, and WebSocket to detect hazards from live camera feeds. Integrated YOLOv8-Pose to detect falls, aggression, and erratic movement, with real-time alerts, automated video clips, and AI-generated dispatch summaries using Google Gemini."
            link="https://github.com/MinsungKxm/WatchLine"
          />
        </div>
      </section>
    </div>
  )
}

export default App