import React from "react"
import { Link } from "gatsby"

import HeroSection from '../components/home/HeroSection'
import Layout from "../components/layout"
import Navbar from "../components/header"
import Footer from "../components/footer"
import AboutSection from "../components/about/AboutSection"
import BioAppSection from "../components/about/BioAppSection"
import BioSection from "../components/about/BioSection"
// import Image from "../components/image"
// import SEO from "../components/seo"

const oIyoni = () => {

  
    return (
      <>
<Navbar/>
<AboutSection/>
<BioSection/>
<BioAppSection/>
<Footer/>
      </>
    )
  }

  export default oIyoni ;