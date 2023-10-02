import { useEffect, useState } from "react";

import "./App.css";
import ImageLoader from "./ImageLoader";
import ImageSearch from "./api";
import { Vortex } from "react-loader-spinner";

function App() {
  const [ Images, setImages ] = useState([]);
  const [ search, setSearch ] = useState("");
  const [ loading, setLoading ] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    ImageSearch("Nepal")
      .then((res: any) => {
        // setLoading(false);
        setImages(res);
      })
      .catch((error) => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  }, []);

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
      <div className="flex-center">
        <div>
          <h2 className="logo">QueryPix</h2>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Ex: Nepal"
            value={ search }
            onChange={ (e) => setSearch(e.target.value) }
            onKeyDown={ (t) => {
              if (t.key == "Enter") {
                runSearch(search);
              }
            } }
          ></input>
          <button type="submit" onClick={ () => runSearch(search) }>
            <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
                fill="currentColor"
              />
            </svg>
            </span>
            search
          </button>
        </div>
      </div>
      <div
        className="flex-center"
        style={ { marginTop: 100, marginBottom: 100, width: "100%" } }
      >
        { loading ? (
          <Vortex
            visible={ loading }
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={ {} }
            wrapperClass="vortex-wrapper"
            colors={ [ "red", "green", "blue", "yellow", "orange", "purple" ] }
          />
        ) : (
          <>
            <ImageLoader data={ Images } />
          </>
        ) }
        <footer >
          <p>
            Made with ❤️ by Sewak Gautam, for OpenSource Contribution{ " " }
            <a href="https://github.com/sewakgautam/QueryPix/">
              Contribute Here
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
