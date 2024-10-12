import "./imageButton.css";
function ImageButton({
  imgSrc,
  content,
  date,
  onClick
}: {
  imgSrc: string;
  content: string;
  date: string;
  onClick: () => void
}) {
  return (
    <div className="img-btn" onClick={onClick}>
      <img src={imgSrc} alt="img" />
      <div className="content">{content}</div>
      <div className="date">{date}</div>
    </div>
  );
}

export default ImageButton;
