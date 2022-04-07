import * as React from "react";
import PropTypes from "prop-types";
import Slide from 'react-reveal/Slide';

// import icon from '../../static/img/lock_open_orange.svg'

const SectionThree = ({ moreValues }) => {
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

            </div>
        </section>

    )
}

SectionThree.propTypes = {
    moreValues: PropTypes.shape({
        heading: PropTypes.string,
        value: PropTypes.array,
    }),
};

export default SectionThree;
