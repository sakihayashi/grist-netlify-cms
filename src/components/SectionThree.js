import * as React from "react";
import PropTypes from "prop-types";
import Slide from 'react-reveal/Slide';
import GetStarted from "./GetStarted";

// import icon from '../../static/img/lock_open_orange.svg'

const SectionThree = ({ moreValues, buttonStart, contact }) => {
    return (
        <section className="hero all">
            <div className="container is-max-widescreen is-justify-content-center pb24">
                    <Slide bottom>
                        <h2 className="h2 text-orange mtb24">
                            {moreValues.heading && moreValues.heading}
                        </h2>
                    </Slide>
                </div>
            <div className="gradient-section gradient-orange">
                <Slide className="container max-width-2000" bottom>
                    <div className="columns">
                        {moreValues.value.map((item) => {
                            const icon = require(`../../static/img/${item.icon.relativePath}`)
                            // const icon = require(`../../static${item.icon}`)
                            return (
                                <div key={item.value} className="column text-center ">
                                    <section className="section">
                                        {/* <img src={icon} /> */}
                                        <img src={icon.default} />
                                        <h3 className="h3 text-orange">
                                            {item.value}
                                        </h3>
                                        <p className="has-text-weight-semibold text-orange">{item.description}</p>
                                    </section>
                                </div>
                            )
                        })}
                    </div>
                </Slide>
                <div className="mb10rem"/>
                <GetStarted buttonStart={buttonStart} />
                <div className="mb10rem"/>
                <div className="container is-max-widescreen is-justify-content-center mb10rem">
                    <Slide bottom>
                        <h2 className="h2 text-orange mtb24">
                            {contact.heading && contact.heading}
                        </h2>
                        <p className="subtitle p text-orange">
                            {contact.description && contact.description}
                        </p>
                    </Slide>
                    <Slide bottom>
                        <a href={`mailto:${contact.link}`}>
                        <button className="button contact-btn mb10rem">{contact.buttonText}</button>
                        </a>
                        
                    </Slide>
                </div>
            </div>
        </section>

    )
}

SectionThree.propTypes = {
    moreValues: PropTypes.shape({
        heading: PropTypes.string,
        value: PropTypes.array,
    }),
    buttonStart: PropTypes.shape({
        title: PropTypes.string,
        description1: PropTypes.string,
        description2: PropTypes.string,
    }),
    contact: PropTypes.shape({
        heading: PropTypes.string,
        description: PropTypes.string,
        buttonText: PropTypes.string,
        email: PropTypes.string,
    })
};

export default SectionThree;
