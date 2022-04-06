import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

export default function SectionOne(props) {
  const {
    img,
    heading1,
    subheading1,
  } = props;

  return (
    <section className="hero all">
        <div className="gradient-section gradient-orange pb24">
            <div className="container is-max-widescreen is-justify-content-center">
                <h2 className="h1 text-orange mtb24">
                {heading1 && heading1}
                </h2>
                <p className="subtitle is-4 text-orange">
                {subheading1 && subheading1}
                </p>
            </div>
            <div className="gradient-section">
            <div className="container is-max-desktop">
                <GatsbyImage
                    image={img}
                    objectFit={"cover"}
                    objectPosition="top center"
                    layout="fullWidth"
                    // You can optionally force an aspect ratio for the generated image
                    aspectratio={3 / 1}
                    // This is a presentational image, so the alt should be an empty string
                    alt=""
                    formats={["auto", "webp", "avif"]}
                />
            </div>
        </div>
        </div>
    </section>
  );
}

SectionOne.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading1: PropTypes.string,
  subheading1: PropTypes.string,
};
