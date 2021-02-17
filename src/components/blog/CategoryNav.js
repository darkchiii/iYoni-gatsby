import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import './CategoryNav.css'

const CategoryNav = () => (
  <StaticQuery
    query={graphql`
      query {
        allStrapiCategory {
          edges {
            node {
              slug
              name
            }
          }
        }
      }
    `}
    render={(data) => (
      <div>
        <div>
          <nav className="uk-navbar-container" data-uk-navbar>
            {/* <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li>
                  <Link to="/">{data.strapiGlobal.siteName}</Link>
                </li>
              </ul>
            </div> */}
            <div className="uk-navbar-left cat-navbar">
              <button
                className="uk-button uk-margin-right button"
                type="button"
              >
                Kategorie
              </button>
              <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000">
                <ul className="uk-nav uk-dropdown-nav">
                  {data.allStrapiCategory.edges.map((category, i) => (
                    <li key={`category__${category.node.slug}`}>
                      <Link to={`/category/${category.node.slug}`}>
                        {category.node.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )}
  />
);

export default CategoryNav;