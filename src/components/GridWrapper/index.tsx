import { LazyLoadImage } from "react-lazy-load-image-component";
import { GridWrapperTypes } from "../../definations/types";
import "./index.scss";
import Icon from "../../shared/Icon";

export default function GridWrapper({ images, index }: GridWrapperTypes) {
  return (
    <div
      className="image-grid"
      data-aos={index % 2 === 1 ? "fade-left" : "fade-right"}
    >
      {images.map((image, idx) => {
        return (
          <div
            className={`img-wrapper ${
              index % 2 === 1
                ? `img-wrapper-${idx + 1}`
                : `img-wrapper-rev-${idx + 1}`
            }`}
            key={image.id}
          >
            <div className="content-overlay"></div>
            <LazyLoadImage
              className="content-image"
              src={image.src.large}
              alt={image.alt}
            />
            <div className="content-details fadeIn">
              <a href={`${image.src.original}`} target="_blank" download>
                <Icon name="save" />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
