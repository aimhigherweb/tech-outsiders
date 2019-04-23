import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const BlogPost = ({ data }) => {
	const post = data

	const meta = {
		// 	name: profile.frontmatter.title + ' | ' + site.siteMetadata.title,
		// 	description: 'The profile page of ' + profile.frontmatter.title,
		// 	slug: profile.fields.slug,
	}

	return (
		<Layout meta={meta} scrolled>
			<h1>Blog Post</h1>
		</Layout>
	)
}

export default BlogPost

export const pageQuery = graphql`
	query BlogPostID($id: String!) {
		site {
			siteMetadata {
				title
				siteUrl
			}
		}
		markdownRemark(id: { eq: $id }) {
			id
			fields {
				slug
			}
			html
			frontmatter {
				publishDate(formatString: "DD MMM YYYY")
				title
				description
				tags
			}
		}
	}
`
