import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import FunctionsSection from '../components/home/FunctionsSection' ;
import AppStoreSection from '../components/home/AppStoreSection' ;
import HeroSection from '../components/home/HeroSection' ;
import BenefitsSection from '../components/home/BenefitsSection' ;
import MomSection from '../components/home/MomSection' ;
import ValuesSection from '../components/home/ValuesSection' ;

import Header from '../components/header.js'
import "../assets/main.css";

const IndexPage = () => {
  // const data = useStaticQuery(query);

  return (


    <div>
      <Header/>
      <HeroSection/>
      <MomSection/>
      <BenefitsSection/>
      <FunctionsSection/>
      <ValuesSection/>
      <AppStoreSection/>


    </div>
  );
};

// const query = graphql`
//   query {
//       seo {
//         metaTitle
//         metaDescription
//       }
//     }
// `;

export default IndexPage;
