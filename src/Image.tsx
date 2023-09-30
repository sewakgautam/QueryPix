import React from "react";

const Image = ({ url, title }) => (
  <div>
    <img style={{ display: "flex" }} src={url} alt={title} />
  </div>
);

export default Image;
