import './InfoCard.css';

function InfoCard({ category, title, subtitle, date, description }) {
  return (
    <div className="project-card">
      <div className="project-body">
        <p className="info-category">{category}</p>

        <h3 className="project-title">
          {title}
        </h3>

        <p className="info-subtitle">{subtitle}</p>

        <p className="info-date">{date}</p>

        <p className="project-description">
          {description}
        </p>
      </div>
    </div>
  );
}

export default InfoCard;