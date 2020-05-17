import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import MenuRoll from '../components/MenuRoll'

export const MenuPostTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section>
      {helmet || ''}
      <div className="menu-container">
        <h1>{title}</h1>
        <PostContent content={content} className="menu" />
      </div>
    </section>
  )
}

MenuPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const MenuPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <MenuRoll />
      <MenuPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s">
            <title>{`${post.frontmatter.title}`}</title>
            <html lang={`${post.frontmatter.lang}`} />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

MenuPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default MenuPost

export const pageQuery = graphql`
  query MenuPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        lang
      }
    }
  }
`
