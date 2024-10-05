
function SocialMedia({
  mediaHandle,
}: {
  mediaHandle: {
    name: string;
    url: string;
  }[];
}) {
  return mediaHandle.map((media) => {
    <div>
      <div className="social-media-name">{media.name}</div>
      <div className="url">{media.url}</div>
    </div>;
  });
}

export default SocialMedia;
