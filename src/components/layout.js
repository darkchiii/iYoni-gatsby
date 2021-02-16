/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import "./layout.css"
import HeroSection from "./home/HeroSection"
import AppStoreSection from "./home/AppStoreSection"
import BenefitsSection from "./home/BenefitsSection"
import FunctionsSection from "./home/FunctionsSection"
import MomSection from "./home/MomSection"
import ValuesSection from "./home/ValuesSection"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header/>
      <HeroSection/>
      <MomSection/>
      <AppStoreSection/>
      <ValuesSection/>
      <BenefitsSection/>
      <FunctionsSection/>

      <Footer/>
    
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
