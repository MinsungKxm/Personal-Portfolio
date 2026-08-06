import './AboutSection.css'

const skills = [
  { abbr: 'JS', name: 'JavaScript' },
  { abbr: '⚛', name: 'React' },
  { abbr: 'Ex', name: 'Express.js' },
  { abbr: 'N', name: 'Node.js' },
  { abbr: 'Pg', name: 'PostgreSQL' },
  { abbr: 'HTML', name: 'HTML5' },
  { abbr: 'CSS', name: 'CSS3' },
  { abbr: 'Git', name: 'Git' },
  { abbr: 'GH', name: 'GitHub' },
  { abbr: 'TW', name: 'Tailwind CSS' },
]

function AboutSection() {
  return (
    <section className="about-section">
      <h2 className="about-heading">
        About
        <span className="about-underline"></span>
      </h2>

      <div className="about-grid">
        <div className="about-text">
          <p className="about-label">Introduction</p>

          <h3 className="about-name">
            Hi, I'm <span className="accent">Minsung Kim</span>
          </h3>

          <p className="about-paragraph">
            I'm a second-year Computer Science student at the University of
            Toronto with a passion for full-stack web development and building
            software that solves real-world problems. I enjoy creating clean,
            user-friendly applications while continuously expanding my knowledge
            of modern web technologies.

            <br /><br />

            Recently, I've been developing a Student Life Tracker for University
            of Toronto students using React, Express.js, and PostgreSQL. Through
            this project, I've gained experience designing responsive user
            interfaces, building REST APIs, managing databases, implementing
            authentication, and deploying full-stack applications. I'm always
            looking for opportunities to learn, collaborate, and create software
            that has a meaningful impact.
          </p>
        </div>

        <div className="about-skills">
          <p className="about-label">Technologies</p>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-item" key={skill.name}>
                <div className="skill-icon">{skill.abbr}</div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection