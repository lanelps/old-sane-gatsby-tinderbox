import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Image = ({ image, alt, loading, title, _css }) => {
  const imageData = getImage(image.asset);
  const src = imageData?.images?.fallback?.src;

  return (
    <>
      {(image?.asset?.src?.includes(`.svg`) && (
        <img src={src} alt={alt || ``} title={title || alt || ``} css={_css} />
      )) || (
        <GatsbyImage
          image={imageData}
          alt={alt || ""}
          loading={loading || "lazy"}
          title={title || ""}
          css={_css}
        />
      )}
    </>
  );
};

export default Image;
