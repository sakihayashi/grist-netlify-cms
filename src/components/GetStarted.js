import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import Slide from 'react-reveal/Slide';

export default function GetStarted(props) {
  const {
    // height = 400,
    buttonStart
  } = props;
  console.log('button', buttonStart)
  return (
    <>
    <section className="hero all">
        <div className="gradient-section gradient-green-downward pb24">
            <Slide　bottom>
                <div className="container is-max-widescreen is-justify-content-center">
                    <p className="h1 text-green mtb24">
                    {buttonStart.title && buttonStart.title}
                    </p>
                    <button class="button is-primary">
                    {buttonStart.description1 && buttonStart.description1}
                    </button>
                </div>
            </Slide>
        </div>     
    </section>
    </>
  );
}

GetStarted.propTypes = {
  buttonStart: PropTypes.shape({
    title: PropTypes.string,
    description1: PropTypes.string,
    description2: PropTypes.string,
  })
};
