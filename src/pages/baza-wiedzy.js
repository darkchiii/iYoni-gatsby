import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import HeroSection from '../components/home/HeroSection'
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import CategoryNav from "../components/blog/CategoryNav"
import ArticlesComponent from "../components/blog/articles";
import "../assets/main.css";



const BazaWiedzy = () => {
  const data = useStaticQuery(query);

  
  return (
    <>
    <Header/>
    <CategoryNav/>
{/* <Layout> */}
<div className="uk-section">
        <div className="uk-container uk-container-large">
          <ArticlesComponent articles={data.allStrapiArticle.edges} />
        </div>
      </div>
{/* </Layout> */}
<Footer/>
    </>
  );
};

const query = graphql`
  query {
    allStrapiArticle(filter: { status: { eq: "published" } }) {
      edges {
        node {
          strapiId
          slug
          title
          category {
            name
          }
          image {
            childImageSharp {
              fixed(width: 800, height: 500) {
                src
              }
            }
          }
          author {
            name
            picture {
              childImageSharp {
                fixed(width: 30, height: 30) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;


export default BazaWiedzy ;