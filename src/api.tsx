import { createApi } from "unsplash-js";
import { ACCESSKEY } from "./config.ts";

export default async function ImageSearch(query: string) {
  const unsplash = createApi({
    accessKey: ACCESSKEY,
  });
  const datas = await unsplash.search
    .getPhotos({
      query,
      perPage: 100,
      page: 1,
    })
    .then((res) => {
      return res.response?.results;
    });

  // console.log("this is data", datas);
  return datas;
}
