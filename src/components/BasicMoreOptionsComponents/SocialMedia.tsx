function SocialMedia({
  mediaHandle,
}: {
  mediaHandle: { name: string; url: string }[];
}) {
  return (
    <div>
      {mediaHandle.map((media) => (
        <div>
          <div className="social-media-name">{media.name}</div>
          <div className="url">{media.url}</div>
        </div>
      ))}
    </div>
  );
}

export default SocialMedia;
