import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
// import FullWidthImage from "../components/FullWidthImage";
import Hero from '../components/Hero';
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from '../components/SectionThree';
import GetStarted from '../components/GetStarted';

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  subtitle,
  heading,
  heading1,
  heading2,
  heading3,
  subheading,
  subheading1,
  subheading2,
  subheading3,
  buttonStart,
  contact,
  // description,
  // intro,
  moreValues,
}) => {
  const heroImage = getImage(image) || image;
  console.log({moreValues})
  return (
    <div>
      {/* <FullWidthImage img={heroImage} title={title} subheading={subheading} /> */}
      <Hero img={heroImage} title={title} subheading={subheading} subtitle={subtitle}  heading2={heading2} heading3={heading3}  subheading2={subheading2} subheading3={subheading3}/>
      <GetStarted buttonStart={buttonStart}/>
      <div className="mb10rem"/>
      <SectionOne heading1={heading1} subheading1={subheading1} img={heroImage}/>
      <div className="mb10rem"/>
      <SectionTwo heading2={heading2} subheading2={subheading2} heading3={heading3} subheading3={subheading3} img={heroImage} />
      <div className="mb10rem"/>
      <SectionThree moreValues={moreValues}/>
      {/* <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  heading: PropTypes.string,
  heading1: PropTypes.string,
  heading2: PropTypes.string,
  heading3: PropTypes.string,
  subheading1: PropTypes.string,
  subheading2: PropTypes.string,
  subheading3: PropTypes.string,
  subheading: PropTypes.string,
  contact: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
  }),
  buttonStart: PropTypes.shape({
    title: PropTypes.string,
    description1: PropTypes.string,
    description2: PropTypes.string,
  }),
  // mainpitch: PropTypes.object,
  description: PropTypes.string,
  moveValues: PropTypes.shape({
    heading: PropTypes.string,
    value: PropTypes.array,
  }),
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        heading={frontmatter.heading}
        heading1={frontmatter.heading1}
        heading2={frontmatter.heading2}
        heading3={frontmatter.heading3}
        subheading={frontmatter.subheading}
        subheading1={frontmatter.subheading1}
        subheading2={frontmatter.subheading2}
        subheading3={frontmatter.subheading3}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        moreValues={frontmatter.moreValues}
        buttonStart={frontmatter.buttonStart}
        contact={frontmatter.contact}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
query IndexPageTemplate {
  markdownRemark(
    frontmatter: {templateKey: {eq: "index-page"}}
  ) {
    frontmatter {
      buttonStart {
				title
        description1
        description2
      }
      contact {
				heading
        description
      }
      title
      image {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      heading
      subheading
      mainpitch {
        title
        description
      }
      description
      subtitle
      subheading1
      subheading2
      subheading3
      heading1
      heading2
      heading3
      subheading1_1
      moreValues {
        heading
        value {
          altText
          description
          value
          icon {
            relativePath
          }
        }
      }
    }
  }
}
`;
