import './ProjectCard.css'

function ProjectCard({ image, title, description, link }) {
  return (
    <div className="project-card">
      <div className="project-image-wrap">
        <img src={image} alt={title} className="project-image" />
      </div>

      <div className="project-body">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-title"
        >
          {title}
        </a>
        <p className="project-description">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard