/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import PropTypes from "prop-types";
import { storiesOf } from "@storybook/react";
import Image from "./index";

const Container = ({ children, maxWidth = "300px" }) => (
  <div>
    <div style={{ maxWidth }}>{children}</div>
    This text shouldn&apos;t jump once the image load
  </div>
);
Container.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.string.isRequired,
};

storiesOf("Image", module)
  .add("with default ratio", () => (
    <Container>
      <Image alt="Alt text" src="https://via.placeholder.com/800x450" />
    </Container>
  ))
  .add("with custom ratio", () => (
    <Container>
      <Image alt="Alt text" src="https://via.placeholder.com/400x300" invertedRatio={(3 / 4) * 100} />
    </Container>
  ));
