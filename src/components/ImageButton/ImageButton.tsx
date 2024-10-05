import "./imageButton.css";
function ImageButton({
  imgSrc,
  content,
  date,
}: {
  imgSrc: string;
  content: string;
  date: string;
}) {
  return (
    <div className="img-btn">
      <img src={imgSrc} alt="img"/>
      <div className="content">{content}</div>
      <div className="date">{date}</div>
    </div>
  );
}

export default ImageButton;
