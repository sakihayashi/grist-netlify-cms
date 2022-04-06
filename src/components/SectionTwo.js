import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

export default function SectionTwo(props) {
  const {
    img,
    heading2,
    subheading2,
    heading3,
    subheading3,
  } = props;

  return (
    <React.Fragment>
    <section className="hero all">
        <div className="gradient-section gradient-green pb24">
            <div className="container is-max-widescreen is-justify-content-center">
                <h2 className="h1 text-green mtb24">
                {heading2 && heading2}
                </h2>
                <p className="subtitle is-4 text-green">
                {subheading2 && subheading2}
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
            <div className="container is-max-widescreen is-justify-content-center">
                <h2 className="h1 text-green mtb24">
                {heading3 && heading3}
                </h2>
                <p className="subtitle is-4 text-green">
                {subheading3 && subheading3}
                </p>
            </div>
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
    </section>
    </React.Fragment>
  );
}

SectionTwo.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading2: PropTypes.string,
  subheading2: PropTypes.string,
  heading3: PropTypes.string,
  subheading3: PropTypes.string,
};
