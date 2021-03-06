import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import Slide from 'react-reveal/Slide';

export default function SectionOne(props) {
  const {
    img,
    heading1,
    subheading1,
  } = props;

  return (
    <section className="hero all">
        <div className="gradient-section gradient-orange">
            <div className="container is-max-widescreen is-justify-content-center pb24">
                <Slide bottom>
                    <h2 className="h2 text-orange mtb24">
                    {heading1 && heading1}
                    </h2>
                    <p className="subtitle p text-orange">
                    {subheading1 && subheading1}
                    </p>
                </Slide>
            </div>
            <div className="gradient-section mb6rem">
                <div className="container is-max-desktop">
                    <Slide bottom>
                        <GatsbyImage
                            image={img}
                            objectFit={"cover"}
                            objectPosition="top center"
                            layout="fullWidth"
                            // You can optionally force an aspect ratio for the generated image
                            aspectratio={3 / 1}
                            // This is a presentational image, so the alt should be an empty string
                            alt=""
                            formats={["auto"]}
                        />
                    </Slide>
                </div>
            </div>
            <div className="container is-max-widescreen is-justify-content-center pb24">
                <Slide bottom>
                    <p className="subtitle p text-orange">
                    {subheading1 && subheading1}
                    </p>
                </Slide>
            </div>
            <div className="gradient-section">
                <div className="container is-max-desktop">
                    <Slide bottom>
                        <GatsbyImage
                            image={img}
                            objectFit={"cover"}
                            objectPosition="top center"
                            layout="fullWidth"
                            // You can optionally force an aspect ratio for the generated image
                            aspectratio={3 / 1}
                            // This is a presentational image, so the alt should be an empty string
                            alt=""
                            formats={["auto"]}
                        />
                    </Slide>
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
