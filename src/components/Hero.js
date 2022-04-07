import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import Slide from 'react-reveal/Slide';

export default function Hero(props) {
  const {
    // height = 400,
    img,
    title,
    subtitle,
    subheading,
    imgPosition = "top left",
  } = props;

  return (
    <>
    <section className="hero all mb10rem">
        <div className="gradient-section gradient-green-downward pb24">
            <Slide　bottom>
                <div className="container is-max-widescreen is-justify-content-center">
                    <h1 className="h1 text-green mtb24">
                    {title && title}
                    </h1>
                    <p className="subtitle p text-green pb24">
                    {subtitle && subtitle}
                    </p>
                </div>
            </Slide>
        </div>
        <div className="gradient-section">
            <div className="container is-max-desktop">
                <Slide bottom>
                    <GatsbyImage
                        image={img}
                        objectFit={"cover"}
                        objectPosition={imgPosition}
                        layout="fullWidth"
                        // You can optionally force an aspect ratio for the generated image
                        aspectratio={3 / 1}
                        // This is a presentational image, so the alt should be an empty string
                        alt={title}
                        formats={["auto"]}
                    />
                </Slide>
            </div>
        </div>       
    </section>
    <div
    className="margin-top-0"
    style={{
        display: "grid",
        alignItems: "center",
    }}
    >
    {(title || subheading) && (
        <div
        style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "relative",
            // This centers the other elements inside the hero component
            placeItems: "center",
            display: "grid",
        }}
        >
        </div>
    )}
    </div>
    </>
  );
}

Hero.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  subtitle:PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
