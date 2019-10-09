import React from "react";
import PropTypes from "prop-types";

const containterStyle = {
  position: "relative",
  width: "100%",
  overflow: "hidden",
};

const placeholderStyle = {
  backgroundColor: "transparent",
};

const imgStyle = {
  position: "absolute",
  width: "100%",
  top: 0,
  left: 0,
  transition: "opacity 1s linear",
};

class ImageWithFallBack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    const { src } = this.props;
    const image = new Image();
    image.onload = () => {
      this.setState({
        isLoaded: true,
      });
    };
    image.src = src;
  }

  render() {
    const { src, alt, invertedRatio = 56.25, maxWidth, ...otherProps } = this.props;
    const { isLoaded } = this.state;
    return (
      <div style={{ ...containterStyle, maxWidth: maxWidth || "auto" }} {...otherProps}>
        <div style={{ ...placeholderStyle, paddingBottom: `${invertedRatio}%` }} />
        <img src={isLoaded ? src : null} alt={alt} style={{ ...imgStyle, opacity: isLoaded ? 1 : 0 }} />
        <noscript>{<img src={src} alt={alt} style={imgStyle} />}</noscript>
      </div>
    );
  }
}

ImageWithFallBack.propTypes = {
  /* Url of the image */
  src: PropTypes.string.isRequired,

  /* Alternative text to displayed if the image connot be loaded */
  alt: PropTypes.string.isRequired,

  /* Inverted ratio as a % (for a 16/9 ratio it's 9/16*100=56.25 for example) */
  invertedRatio: PropTypes.number.isRequired,

  /* Provide an optional max width for the image */
  maxWidth: PropTypes.string,
};

export default ImageWithFallBack;
