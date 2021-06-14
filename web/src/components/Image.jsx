import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Image = ({ image, alt, loading, title }) => {
  const imageData = getImage(image.asset);
  const src = imageData?.images?.fallback?.src;

  return (
    <>
      {(image?.asset?.src?.includes(`.svg`) && (
        <img src={src} alt={alt || ``} title={title || alt || ``} />
      )) || (
        <GatsbyImage
          image={imageData}
          alt={alt || ""}
          loading={loading || "lazy"}
          title={title || ""}
        />
      )}
    </>
  );
};

export default Image;
