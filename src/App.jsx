import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header className="site-nav">
        <div className="logo">
          Your <span className="accent">Name</span>
        </div>

        <nav className="links">
          <a href="#" className="active">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Testimonials</a>
          <a href="#">Blogs</a>
          <a href="#">Contact</a>
        </nav>

        <div className="nav-right">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M20.8 8.6c0-3.1-2.5-5.4-5.4-5.4-1.8 0-3.4.9-4.4 2.3-1-1.4-2.6-2.3-4.4-2.3-2.9 0-5.4 2.3-5.4 5.4 0 6 9.8 11.8 9.8 11.8s9.8-5.8 9.8-11.8z"/>
          </svg>
          <span>3</span>
        </div>
      </header>

      <section className="hero">
        <div className="hero-watermark">YN</div>

        <div className="hero-content">
          <div className="avatar-wrap">
            <div className="avatar">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 8a2 2 0 0 1 2-2h1.2l.9-1.5A1.5 1.5 0 0 1 9.4 3.7h5.2a1.5 1.5 0 0 1 1.3.8L16.8 6H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z"/>
                <circle cx="12" cy="13" r="3.4"/>
              </svg>
              <span>Add photo</span>
            </div>
          </div>

          <div className="role-pill">Software Developer</div>

          <h1 className="headline">
            Talk is cheap.<br />
            Show me the code.
          </h1>

          <p className="subtext">
            I design and build beautifully simple things, and I love what I do.
          </p>

          <div className="cta-row">
            <a href="#" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16"/>
              </svg>
              Download CV
            </a>

            <a href="#" className="btn btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/>
              </svg>
              My Projects
            </a>
          </div>

          <div className="social-row">
            <a href="#" aria-label="Facebook">
              Facebook
            </a>

            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>

            <a href="#" aria-label="GitHub">
              GitHub
            </a>
          </div>
        </div>

        <div className="scroll-tick"></div>
      </section>
    </div>
  )
}

export default App