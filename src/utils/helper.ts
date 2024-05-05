import { PhotosResponse } from "../definations/types";

export const chunkArray = (images: PhotosResponse[], size = 5) => {
  const chunkedArray = [];
  for (let i = 0; i < images.length; i += size) {
    chunkedArray.push(images.slice(i, i + size));
  }
  return chunkedArray;
};