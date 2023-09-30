import { useState } from "react";

import "./App.css";
import axios from "axios";
import ImageLoader from "./ImageLoader";

function App() {
  const [Images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const runSearch = (query: any) => {
    setLoading(true);
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${"636e1481b4f3c446d26b8eb6ebfe7127"}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        setLoading(false);
        setImages(response.data.photos.photo);
      })
      .catch((error) => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  };

  // const ImageLoader = Images.map((image: any) => {
  //   const farm = image.farm;
  //   const server = image.server;
  //   const id = image.id;
  //   const secret = image.secret;
  //   const title = image.title;
  //   const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
  //   return (
  //     <div>
  //       <Image url={url} title={title} />
  //     </div>
  //   );
  // });

  // console.log(ImageLoader);

  // const gallary = () => {
  //   console.log(ImageLoader);
  // };

  return (
    <div className="container">
      <div>
        <h2 style={{ fontSize: 70 }}>QueryPix</h2>
      </div>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button type="submit" onClick={() => runSearch(search)}>
          search
        </button>
      </div>
      <div>
        <p>Here is image</p>
        {loading ? `<p>Loading</p>` : <ImageLoader data={Images} />}
      </div>
    </div>
  );
}

export default App;
