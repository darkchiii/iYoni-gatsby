import React from "react";
import './articles.css' ;
import Card from "./card";

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <div className='articles-section'>
      <div className="uk-child-width-1-2@s " data-uk-grid="true">
        <div>
          {leftArticles.map((article, i) => {
            return ( 
              <div className='articles-left'> 
              <Card
                article={article}
                key={`article__left__${article.node.slug}`}
              />
              </div>
            );
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightArticles.map((article, i) => {
              return (
                <Card
                  article={article}
                  key={`article__right__${article.node.slug}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;