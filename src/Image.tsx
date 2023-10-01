const Image = ({
  url,
  title,
  raw,
}: {
  url: string;
  title: string;
  raw: string;
}) => (
  <div>
    <a href={raw} target="_blank">
      <img
        style={{
          display: "flex",
          width: 300,
          height: 300,
          objectFit: "cover",
          opacity: 0,
          transition: "opacity 0.5s ease-in-out",
        }}
        src={url}
        alt={title}
        onLoad={(e) => {
          e.currentTarget.style.opacity = "1";
        }}
      />
    </a>
  </div>
);

export default Image;
