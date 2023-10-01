import Image from "./Image";

export default function ImageLoader(images: any) {
  const result = images;
  let final;
  if (result.data.length > 0) {
    final = result.data.map((image: any) => {
      return (
        <Image
          url={image.urls.small}
          title={image.alt_description}
          raw={image.urls.raw}
        />
      );
    });
  } else {
    return (
      <div>
        <img
          className="baseimage"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"
        />
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "50px",
        placeContent: "center",
        placeItems: "center",
        margin: "0 auto",
        width: "100%",
        maxWidth: "1200px",
      }}
    >
      {final}
    </div>
  );
}
