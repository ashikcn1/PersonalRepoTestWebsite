import './commonMoreOptionsStyle.css'

function Project({
  imageSrc,
  description,
  date,
}: {
  imageSrc: string;
  description: string;
  date: string;
}) {
  return (
    <div>
      <div className="image-div">
        <img src={imageSrc} alt="image Unavailable" />
      </div>
      <div className="img-description">{description}</div>
      <div className="date">{date}</div>
    </div>
  );
}

export default Project;
