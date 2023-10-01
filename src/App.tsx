import { useState } from "react";

import "./App.css";
import ImageLoader from "./ImageLoader";
import ImageSearch from "./api";
import { Vortex } from "react-loader-spinner";

function App() {
  const [Images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const runSearch = (query: string) => {
    setLoading(true);
    ImageSearch(query)
      .then((res: any) => {
        setLoading(false);
        setImages(res);
      })
      .catch((error) => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  };

  return (
    <>
      <div
      className="flex-center"
      >
      <div>
        <h2 className="logo">QueryPix</h2>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(t) => {
            if (t.key == "Enter") {
              runSearch(search);
            }
          }}
        ></input>
        <button type="submit" onClick={() => runSearch(search)}>
          🔍 search
        </button>
      </div>
      </div>
      <div className="flex-center" style={{ marginTop: 100, width: "100%" }}>
        {loading ? (
          <Vortex
            visible={loading}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
        ) : (
          <ImageLoader data={Images} />
        )}
      </div>
    </>
  );
}

export default App;
