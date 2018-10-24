import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

class IndexPage extends React.Component {
    render() {
        // const { data } = this.props
        // const { edges: posts } = data.allMarkdownRemark

        const meta = {
            // name: data.site.siteMetadata.title,
            // description: data.site.siteMetadata.description,
            // slug: data.site.siteMetadata.siteUrl,
        };

        return (
            <Layout meta={meta}>
               
            </Layout>
        )
    }
}

// IndexPage.propTypes = {
//     data: PropTypes.shape({
//         allMarkdownRemark: PropTypes.shape({
//             edges: PropTypes.array,
//         }),
//     }),
// }
  
// export const pageQuery = graphql`
//     query IndexQuery {
//         site {
//             siteMetadata {
//                 title
//                 description
//                 siteUrl
//             }
//         }
//         allMarkdownRemark(
//             sort: { order: ASC, fields: [frontmatter___name] }
//         ) {
//             edges {
//                 node {
//                     id
//                     fields {
//                         slug
//                     }
//                     frontmatter {
//                         name
//                     }
//                 }
//             }
//         }
//     }
// `
  

export default IndexPage;