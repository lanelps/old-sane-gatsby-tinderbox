import React, { useState } from "react";
import BlockContent from "@sanity/block-content-to-react";
import { getGatsbyImageData } from "gatsby-source-sanity";

import Image from "~components/Image.jsx";

const PortableText = ({ blocks, serializer }) => {
  const sanityConfig = { projectId: `mszpkrrn`, dataset: `production` };

  const [serializers, setSerializers] = useState({
    types: {
      block: (props) => {
        switch (props.node.style) {
          case `h1`:
            return <h1>{props.children}</h1>;

          case `h2`:
            return <h2>{props.children}</h2>;

          case `h3`:
            return <h3>{props.children}</h3>;

          case `h4`:
            return <h4>{props.children}</h4>;

          case `h5`:
            return <h5>{props.children}</h5>;

          case `h6`:
            return <h6>{props.children}</h6>;

          case `normal`:
          default:
            return <p>{props.children}</p>;
        }
      },
      blockImage: (props) => {
        const { image } = props.node;

        const fluidProps = getGatsbyImageData(
          image.asset._ref,
          { maxWidth: 1920 },
          sanityConfig
        );

        const imageProps = {
          asset: {
            fluid: fluidProps,
          },
        };

        const imageJSX = <Image image={imageProps} alt={props.node.altText} />;

        return imageJSX;
      },
    },
    marks: {
      strong: ({ children }) => <strong>{children}</strong>,
      em: ({ children }) => <em>{children}</em>,
      link: ({ children, mark }) => (
        <a href={mark.href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
  });

  //

  if (blocks) {
    return (
      <BlockContent blocks={blocks} serializers={serializer || serializers} />
    );
  } else {
    console.error(`Portable Text: Blocks is undefined`);
    return null;
  }
};

export default PortableText;
