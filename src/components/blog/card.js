import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import './card.css'

const Card = ({ article }) => {
  return (
    <Link to={`/article/${article.node.slug}`} className="uk-link-reset">
      <div className="uk-card uk-card-hover uk-card-muted card">
        <div className="uk-card-media-top">
          <Img
            fixed={article.node.image.childImageSharp.fixed}
            imgStyle={{ position: "static", borderRadius:20 }}
          />
        </div>
        <div className="uk-card-body">
          <p id="category" className="category">
            {article.node.category.name}
          </p>
          <p id="title" className="title">
            {article.node.title}
          </p>
          {/* <div>
            <hr className="uk-divider-small" />
            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
              <div>
                {article.node.author.picture && (
                  <Img
                    fixed={article.node.author.picture.childImageSharp.fixed}
                    imgStyle={{ position: "static", borderRadius: "50%" }}
                  />
                )}
              </div>
              <div className="uk-width-expand">
                <p className="uk-margin-remove-bottom">
                  {article.node.author.name}
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default Card;