const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const speakerTemplate = path.resolve("src/templates/speakerProfile.js")
  const filterTemplate = path.resolve("src/templates/filter.js")

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              location
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        component: speakerTemplate,
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    let cities = []
      // Iterate through each speaker, putting all found locations into `cities`
      _.each(posts, edge => {
        if (_.get(edge, "node.frontmatter.location")) {
          cities = cities.concat(edge.node.frontmatter.location)
        }
      })
      // Eliminate duplicate tags
      cities = _.uniq(cities)

      // Make tag pages
      cities.forEach(city => {
        createPage({
          path: `/${_.kebabCase(city)}/`,
          component: filterTemplate,
          context: {
            city,
          },
        })
      })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
