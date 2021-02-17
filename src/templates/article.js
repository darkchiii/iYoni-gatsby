import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Moment from "react-moment";
import Layout from "../components/layout";
import Markdown from "react-markdown";
import './article.css'
import Header from "../components/header";


export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }, status: { eq: "published" }) {
      strapiId
      title
      description
      content
      publishedAt
      image {
        publicURL
        childImageSharp {
          fixed {
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
`;

const Article = ({ data }) => {
  const article = data.strapiArticle;
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  return (
    <Layout seo={seo}>
      <Header/>
        <div>
        {/* <div
         id="banner"
         className="uk-flex uk-flex-center uk-flex-middle  uk-light uk-padding uk-margin uk-background-cover img-layout "
         //uk-height-medium 
          data-src={article.image.publicURL}
          data-srcset={article.image.publicURL}
          data-uk-img
          width="406"
          height="1186"
          >
        
          <h2>{article.title}</h2>
        </div> */}

        <div className="">

            <div id="banner"
         className="uk-flex uk-flex-center uk-flex-middle uk-light uk-margin uk-padding uk-background-cover img-layout "
         uk-height-medium 
         >
            <img className="banner-img"
            data-src={article.image.publicURL}
            data-srcset={article.image.publicURL}
            data-uk-img
            // sizes="(min-width: 620px) " 
            width="1086"
            />
             <h2 className="article-title">{article.title}</h2>
             </div>
        </div>


        <div className="uk-section section">
          <div className="uk-container uk-container-small">
<div className="uk-grid-small uk-flex-left author-section" data-uk-grid="true">
  <div>
    {article.author.picture && (
      <Img
        fixed={article.author.picture.childImageSharp.fixed}
        imgStyle={{ position: "static", borderRadius: "50%" }}
      />
    )}
  </div>
  <div className="uk-width-expand">
    <p className="uk-margin-remove-bottom">
    {article.author.name}
    </p>
    <p className="uk-text-meta uk-margin-remove-top">
      <Moment format="MMM Do YYYY">{article.published_at}</Moment>
    </p>
  </div>
  {/* <hr className="uk-divider-small" /> */}
</div>
<hr className="uk-divider-small" />

            <Markdown source={article.content} escapeHtml={false} 
            />

            {/* <hr className="uk-divider-small" />

            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
              <div>
                {article.author.picture && (
                  <Img
                    fixed={article.author.picture.childImageSharp.fixed}
                    imgStyle={{ position: "static", borderRadius: "50%" }}
                  />
                )}
              </div>
              <div className="uk-width-expand">
                <p className="uk-margin-remove-bottom">
                {article.author.name}
                </p>
                <p className="uk-text-meta uk-margin-remove-top">
                  <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                </p>
              </div>
            </div> */}

            {/* <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
              <div>
                {article.author.picture && (
                  <Img
                    fixed={article.author.picture.childImageSharp.fixed}
                    imgStyle={{ position: "static", borderRadius: "50%" }}
                  />
                )}
              </div>
              <div className="uk-width-expand">
                <p className="uk-margin-remove-bottom">
                {article.author.name}
                </p>
                <p className="uk-text-meta uk-margin-remove-top">
                  <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Article;