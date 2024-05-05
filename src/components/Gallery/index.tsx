import { useEffect, useMemo } from "react";
import { GalleryTypes } from "../../definations/types";
import { chunkArray } from "../../utils/helper";
import GridWrapper from "../GridWrapper";
import AOS from "aos";
import "aos/dist/aos.css";
import { IMAGESPERCHUNK } from "../../definations/constants";

function Gallery({ images }: GalleryTypes) {

  useEffect(() => {
    AOS.init();
  }, []);

  const imageChunks = useMemo(
    () => chunkArray(images, IMAGESPERCHUNK),
    [images]
  );

  console.log("inside agllery", imageChunks);

  return (
    <div className="gallery-wrapper">
      {imageChunks.map((chunk, index) => {
        return <GridWrapper key={index} images={chunk} index={index} />;
      })}
    </div>
  );
}

export default Gallery;
