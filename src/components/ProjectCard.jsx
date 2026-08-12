import './ProjectCard.css'

function ProjectCard({ image, title, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="project-image-wrap">
        <img src={image} alt={title} className="project-image" />
      </div>

      <div className="project-body">
        <span className="project-title">{title}</span>
        <p className="project-description">{description}</p>
      </div>
    </a>
  )
}

export default ProjectCard