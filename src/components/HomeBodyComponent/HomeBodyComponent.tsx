import { useNavigate } from "react-router-dom";
import ImageButton from "../ImageButton/ImageButton";

function HomeBodyComponent({
  images,
}: {
  images: { imgSrc: string; content: string; date: string; routePath: string, }[];
}) {

  const navigate = useNavigate()
  return (
    <div className="img-container">
      {images.map(
        (image: { imgSrc: string; content: string; date: string; routePath: string, }) => (
          <ImageButton
            imgSrc={image.imgSrc}
            content={image.content}
            date={image.date}
            onClick={() => { navigate(image.routePath) }}
          ></ImageButton>
        )
      )}
    </div>
  );
}

export default HomeBodyComponent;
