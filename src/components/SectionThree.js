import * as React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

const SectionThree = ({ moreValues }) => (
  <div className="columns">
    {moreValues.values.map((item) => (
      <div key={item.heading} className="column">
        <section className="section">
            <GatsbyImage
                image={item.icon}
                objectFit={"cover"}
                objectPosition="top center"
                layout="fullWidth"
                // You can optionally force an aspect ratio for the generated image
                aspectratio={3 / 1}
                // This is a presentational image, so the alt should be an empty string
                alt=""
                formats={["auto", "webp", "avif"]}
            />
          <h2 className="is-size-1 has-text-weight-bold has-text-primary has-text-centered">
            {item.heading}
          </h2>
          <p className="has-text-weight-semibold">{item.description}</p>
        </section>
      </div>
    ))}
  </div>
);

SectionThree.propTypes = {
moreValues: PropTypes.shape({
    heading: PropTypes.string,
    values: PropTypes.array,
    }),
};

export default SectionThree;
