import React from "react";
import PropTypes from "prop-types";

const imgStyle = {
  position: "absolute",
  width: "100%",
  top: 0,
  left: 0,
  transition: "opacity 1s linear",
};

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  render() {
    const { src, alt, invertedRatio = 56.25, maxWidth, ...otherProps } = this.props;
    const { isLoaded } = this.state;
    return (
      <div style={{ position: "relative", width: "100%", maxWidth: maxWidth || "auto" }} {...otherProps}>
        <div style={{ paddingBottom: `${invertedRatio}%`, backgroundColor: "transparent" }} />
        <img
          src={src}
          alt={alt}
          style={{ ...imgStyle, opacity: isLoaded ? 1 : 0 }}
          onLoad={() => {
            this.setState({
              isLoaded: true,
            });
          }}
        />
        <noscript>{<img src={src} alt={alt} style={imgStyle} />}</noscript>
      </div>
    );
  }
}

Image.propTypes = {
  /* Url of the image */
  src: PropTypes.string.isRequired,

  /* Alternative text to displayed if the image connot be loaded */
  alt: PropTypes.string.isRequired,

  /* Inverted ratio as a % (for a 16/9 ratio it's 9/16*100=56.25 for example) */
  invertedRatio: PropTypes.string.isRequired,

  /* Provide an optional max width for the image */
  maxWidth: PropTypes.string,
};

export default Image;
