

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import CategoryNav from "./blog/CategoryNav";
import PropTypes from "prop-types";
import Seo from "./seo";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children, seo }) => (
  <StaticQuery
    query={graphql`
      query {
        strapiHomepage {
          seo {
            metaTitle
            metaDescription
            shareImage {
              publicURL
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Seo seo={seo} />
        <Header/>
        <main>{children}</main>
                <Footer/>

      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;