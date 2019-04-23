const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const remark = require('remark')
const remarkHTML = require('remark-html')

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions

	const speakerTemplate = path.resolve('src/templates/speakerProfile.js')
	const filterTemplate = path.resolve('src/templates/filter.js')

	return graphql(`
		{
			allMarkdownRemark(limit: 1000) {
				edges {
					node {
						id
						fields {
							slug
						}
						fileAbsolutePath
						frontmatter {
							title
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
			if (RegExp('.*src/profiles/.*').test(edge.node.fileAbsolutePath)) {
				createPage({
					path: edge.node.fields.slug,
					component: speakerTemplate,
					// additional data can be passed via context
					context: {
						id,
						city: edge.node.frontmatter.location,
					},
				})
			} else if (RegExp('.*src/locations/.*').test(edge.node.fileAbsolutePath)) {
				createPage({
					path: edge.node.fields.slug,
					component: filterTemplate,
					context: {
						city: edge.node.frontmatter.title,
					},
				})
			}
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

	if (node.frontmatter && node.frontmatter.mentoring) {
		const mentoringMarkdown = node.frontmatter.mentoring

		node.frontmatter.mentoring = remark()
			.use(remarkHTML)
			.processSync(mentoringMarkdown)
			.toString()
		return node
	}
}
