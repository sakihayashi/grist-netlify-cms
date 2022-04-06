import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Hero(props) {
  const {
    height = 400,
    img,
    title,
    subtitle,
    subheading,
    imgPosition = "top left",
  } = props;

  return (
    <React.Fragment>
    <section className="hero all">
        <div className="gradient-section gradient-green-downward pb24">
            <div className="container is-max-widescreen is-justify-content-center">
                <h1 className="h1 text-green mtb24">
                {title && title}
                </h1>
                <p className="subtitle is-4 text-green">
                {subtitle && subtitle}
                </p>
            </div>
        
        </div>
        <div className="gradient-section">
            <div className="container is-max-desktop">
                <GatsbyImage
                    image={img}
                    objectFit={"cover"}
                    objectPosition={imgPosition}
                    // style={{
                    // gridArea: "1/1",
                    // maxHeight: height,
                    // }}
                    layout="fullWidth"
                    // You can optionally force an aspect ratio for the generated image
                    aspectratio={3 / 1}
                    // This is a presentational image, so the alt should be an empty string
                    alt={title}
                    formats={["auto", "webp", "avif"]}
                />
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
            {/* Any content here will be centered in the component */}
   
            {/* {subheading && (
              <h3
                className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                style={{
                  boxShadow:
                    "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
                  backgroundColor: "rgb(255, 68, 0)",
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25rem",
                  marginTop: "0.5rem",
                }}
              >
                {subheading}
              </h3>
            )} */}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

Hero.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  subtitle:PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
