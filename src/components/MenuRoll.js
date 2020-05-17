import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class MenuRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="menu-link__list">
        {posts &&
          posts.map(({ node: post }) => (
            <Link
              className="menu-link"
              activeClassName="menu-link--active"
              to={post.fields.slug}
              >
              <div>
                <img src={post.frontmatter.flagimage ? post.frontmatter.flagimage.publicURL : '/img/empty.svg'} alt="" />
                <span>{post.frontmatter.langName}</span>  
              </div>
            </Link>
          ))}
      </div>
    )
  }
}

MenuRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query MenuRollQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___langName] }
          filter: { frontmatter: { templateKey: { eq: "menu-post" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                langName
                templateKey
                flagimage {
                  publicURL
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <MenuRoll data={data} count={count} />}
  />
)
