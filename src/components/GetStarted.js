import React from "react";
import PropTypes from "prop-types";
import Slide from 'react-reveal/Slide';

export default function GetStarted(props) {
    const {
        // height = 400,
        buttonStart
    } = props;
    console.log('button', buttonStart)
    return (
        <>
            <section className="hero all mtb24">
                <div className="gradient-section">
                    <div className="container is-max-widescreen is-justify-content-center">
                        <Slide bottom>
                            <p className="desc text-green pb24">
                                {buttonStart.description1 && buttonStart.description1}
                            </p>
                        </Slide>
                        <Slide bottom>
                            <button className="button grist-btn is-primary">
                                {buttonStart.title && buttonStart.title}
                            </button>
                        </Slide>
                        
                    </div>
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
