

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import CategoryNav from "./blog/CategoryNav";
import Seo from "./seo";
import HeroSection from "./home/HeroSection";
import Footer from "./footer";
import Navbar from "./header";

const Layout = ({ 
  // children, seo 
}) => (
  <StaticQuery
    // query={graphql`
    //   query {
    //     strapiHomepage {
    //       seo {
    //         metaTitle
    //         metaDescription
    //       }
    //     }
    //   }
    // `}
    render={(data) => (
      <>
        {/* <Seo seo={seo} /> */}
        {/* <Navbar/> */}
        {/* <CategoryNav /> */}
        {/* <Footer/> */}
        {/* <main>{children}</main> */}
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;