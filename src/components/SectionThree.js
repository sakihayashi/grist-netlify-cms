import * as React from "react";
import PropTypes from "prop-types";
import Slide from 'react-reveal/Slide';
import GetStarted from "./GetStarted";

// import icon from '../../static/img/lock_open_orange.svg'

const SectionThree = ({ moreValues, buttonStart, contact }) => {
    return (
        <section className="hero all">
            <div className="gradient-section gradient-orange">
                <div className="container is-max-widescreen is-justify-content-center pb24">
                    <Slide bottom>
                        <h2 className="h1 text-orange mtb24">
                            {moreValues.heading && moreValues.heading}
                        </h2>
                    </Slide>
                </div>
                <Slide bottom>
                    <div className="columns">
                        {moreValues.value.map((item) => {
                            const icon = require(`../../static/img/${item.icon.relativePath}`)
                            return (
                                <div key={item.value} className="column text-center ">
                                    <section className="section">
                                        <img src={icon.default} />
                                        <h3 className="is-size-3 text-orange">
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
                        <h2 className="h1 text-orange mtb24">
                            {contact.heading && contact.heading}
                        </h2>
                        <p className="subtitle is-4 text-orange">
                            {contact.description && contact.description}
                        </p>
                    </Slide>
                    <Slide bottom>
                        <button className="button is-secondary mb10rem">Contact</button>
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
    })
};

export default SectionThree;
