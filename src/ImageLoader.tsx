import Image from "./Image";

export default function ImageLoader(images: any) {
  // console.log(image);

  const result = images;
  let final;
  // console.log(result.data);
  if (result.data.length > 0) {
    final = result.data.map((image: any) => {
      console.log(image);
      const farm = image.farm;
      const server = image.server;
      const id = image.id;
      const secret = image.secret;
      const title = image.title;
      const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image url={url} title={title} />;
    });
  } else {
    return (
      <div>
        <p>no image found</p>
      </div>
    );
  }
  // console.log("this is final", final);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 50 }}>{final}</div>
  );
}
