import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const imgStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  transition: "opacity 1s linear",
};

const ImageWithFallBack = ({ src, alt, invertedRatio = 56.25, ...otherProps }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setIsLoaded(true);
    };
    image.src = src;
  }, [src]);

  return (
    <div style={{ position: "relative" }} {...otherProps}>
      <div style={{ paddingBottom: `${invertedRatio}%`, backgroundColor: "transparent" }} />
      <img src={isLoaded ? src : null} alt={alt} style={{ ...imgStyle, opacity: isLoaded ? 1 : 0 }} />
      <noscript>{<img src={src} alt={alt} style={imgStyle} />}</noscript>
    </div>
  );
};
ImageWithFallBack.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  invertedRatio: PropTypes.string,
};

export default ImageWithFallBack;
