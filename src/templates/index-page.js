import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
// import FullWidthImage from "../components/FullWidthImage";
import Hero from '../components/Hero';
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from '../components/SectionThree'

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
  mainpitch,
  description,
  intro,
  moreValues,
}) => {
  const heroImage = getImage(image) || image;
  console.log({moreValues})
  return (
    <div>
      {/* <FullWidthImage img={heroImage} title={title} subheading={subheading} /> */}
      <Hero img={heroImage} title={title} subheading={subheading} subtitle={subtitle}  heading2={heading2} heading3={heading3}  subheading2={subheading2} subheading3={subheading3}/>
      <SectionOne heading1={heading1} subheading1={subheading1} img={heroImage}/>
      <SectionTwo heading2={heading2} subheading2={subheading2} heading3={heading3} subheading3={subheading3} img={heroImage} />
      {/* <SectionThree moreValues={moreValues}/> */}
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
  mainpitch: PropTypes.object,
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
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
    frontmatter {
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
      intro {
        blurbs {
          image {
            childImageSharp {
              gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
            }
          }
          text
        }
        heading
        description
      }
      subtitle
      subheading1
      subheading2
      subheading3
      heading1
      heading2
      heading3
      moreValues {
        valueSubHead3
        heading
        value {
          altText
          description
          values
          icon {
            childImageSharp {
              fixed(width: 100) {
                src
                srcSet
              }
            }
          }
        }
      }
    }
  }
}
`;
