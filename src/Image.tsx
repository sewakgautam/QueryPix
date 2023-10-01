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
        style={{ display: "flex", width: 300, height: 300, objectFit: "cover" }}
        src={url}
        alt={title}
      />
    </a>
  </div>
);

export default Image;
