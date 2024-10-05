import ImageButton from "../ImageButton/ImageButton";

function HomeBodyComponent({
  images,
}: {
  images: { imgSrc: string; content: string; date: string }[];
}) {
  return (
    <div className="img-container">
      {images.map(
        (image: { imgSrc: string; content: string; date: string }) => (
          <ImageButton
            imgSrc={image.imgSrc}
            content={image.content}
            date={image.date}
          ></ImageButton>
        )
      )}
    </div>
  );
}

export default HomeBodyComponent;
