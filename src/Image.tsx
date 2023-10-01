const Image = ({
  url,
  title,
  raw,
}: {
  url: string;
  title: string;
  raw: string;
}) => (<div
  className="img-card"
>
  <a href={ raw } target="_blank"
  >
    <img
      src={ url }
      alt={ title }
      onLoad={ (e) => {
        e.currentTarget.style.opacity = "1";
      } }
    />
  </a>
</div>);



export default Image;
