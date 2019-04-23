import React, { Fragment, Component } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

export default class BlogPost extends Component {
	render() {
		const data = this.props.data,
			author = data.profile,
			post = data.post,
			site = data.site,
			meta = {
				name: post.frontmatter.title + ' | ' + site.siteMetadata.title,
				description: post.frontmatter.description,
				slug: post.fields.slug,
			}

		return (
			<Layout meta={meta} scrolled>
				<article>
					<header>
						<h1>{post.frontmatter.title}</h1>
						<time datetime={post.frontmatter.publishDate}>
							{post.frontmatter.publishDate}
						</time>
					</header>
					<div className="author">
						<Img
							fixed={author.frontmatter.profileImage.childImageSharp.fixed}
							style={{
								display: 'block',
								margin: '0 auto',
								width: '30vw',
								maxWidth: '100px',
								height: '30vw',
								maxHeight: '100px',
							}}
						/>
						<Link to={author.fields.slug}>{author.frontmatter.title}</Link>
					</div>

					<main>
						<Img
							fixed={post.frontmatter.featuredImage.childImageSharp.fixed}
							style={{ maxWidth: '90vw' }}
							className="featured"
						/>
						<div dangerouslySetInnerHTML={{ __html: post.html }} />
					</main>
				</article>
			</Layout>
		)
	}
}

export const pageQuery = graphql`
	query BlogPostID($id: String!, $author: String!) {
		site {
			siteMetadata {
				title
				siteUrl
			}
		}
		post: markdownRemark(id: { eq: $id }) {
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
				featuredImage {
					childImageSharp {
						fixed(width: 400) {
							...GatsbyImageSharpFixed_withWebp
						}
					}
				}
			}
		}
		profile: markdownRemark(frontmatter: { title: { eq: $author } }) {
			fields {
				slug
			}
			frontmatter {
				title
				profileImage {
					childImageSharp {
						fixed(width: 100) {
							...GatsbyImageSharpFixed_withWebp
						}
					}
				}
			}
		}
	}
`
