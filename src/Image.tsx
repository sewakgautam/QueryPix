const Image = ({ url, title }: { url: string; title: string }) => (
  <div>
    <img style={{ display: "flex" }} src={url} alt={title} />
  </div>
);

export default Image;
