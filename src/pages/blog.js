import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { Twitter, Facebook } from 'react-feather'

import Layout from '../components/layout'

import '../scss/blog.scss'

const meta = {
	name: 'Tech Outsiders',
	description:
		'It is our mission to solve that problem by highlighting all of the marvellous talent the Tech Industry has outside of the default.',
	slug: '/blog',
}

const Blog = pageInfo => {
	const data = pageInfo.data,
		site = data.site.siteMetadata,
		profiles = data.profiles.edges,
		posts = data.posts.edges,
		meta = {
			name: site.title,
			description: 'Read some awesome blog posts by awesome women',
			slug: '/blog',
		}

	return (
		<Layout meta={meta} scrolled>
			<h1>Blog</h1>
			<div className="article-feed">
				{posts.map(({ node: post }) => {
					let articleLink = `${site.siteUrl}/blog${post.fields.slug}`,
						facebookLink =
							'https://www.facebook.com/sharer/sharer.php?u=' + articleLink,
						twitterLink =
							'https://twitter.com/home?status=So%20%40TechOutsiders%published%20this%20really%20cool%20blog%20post,%20you%20should%20check%20it%20out!%20' +
							articleLink,
						author = false

					profiles.some(({ node: profile }) => {
						if (profile.frontmatter.title == post.frontmatter.author) {
							author = {
								image: profile.frontmatter.profileImage.childImageSharp.fixed,
								slug: profile.fields.slug,
							}
						}
					})


					return (
						<article id={post.id} key={post.id} className="feed-article">
							<Img
								className="image-feature"
								fixed={post.frontmatter.featuredImage.childImageSharp.fixed}
								style={{ float: 'none', marginLeft: '0' }}
							/>
							<div className="author">
								<div className="image-profile">
									{author && (
										<Link to={author.slug}>
											<Img fixed={author.image} />
										</Link>
									)}
								</div>
							</div>
							<header>
								<h2 className="article-title">
									<Link id={post.id} to={`/blog${post.fields.slug}`}>
										{post.frontmatter.title}
									</Link>
								</h2>
								<h6 className="date">{post.frontmatter.publishDate}</h6>
							</header>
							<div className="excerpt">{post.excerpt}</div>
							<div className="share-icons">
								<a
									href={facebookLink}
									target="_blank"
									className="facebook share-link"
								>
									{<Facebook />}
								</a>
								<a
									href={twitterLink}
									target="_blank"
									className="twitter share-link"
								>
									{<Twitter />}
								</a>
							</div>
						</article>
					)
				})}
			</div>
		</Layout>
	)
}

export default Blog

export const blogQuery = graphql`
	query BlogQuery {
		site {
			siteMetadata {
				title
				description
				siteUrl
			}
		}
		profiles: allMarkdownRemark(
			sort: { order: ASC, fields: [frontmatter___title] }
			filter: { fileAbsolutePath: { regex: "/src/profiles//" } }
		) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
					}
				}
			}
		}
		posts: allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/src/blog//" } }
			sort: { order: ASC, fields: frontmatter___publishDate }
		) {
			edges {
				node {
					id
					fields {
						slug
					}
					excerpt
					frontmatter {
						publishDate(formatString: "DD MMM YYYY")
						title
						author
						featuredImage {
							childImageSharp {
								fixed(width: 400) {
									...GatsbyImageSharpFixed_withWebp
								}
							}
						}
					}
				}
			}
		}
	}
`
// profileImage {
// 	childImageSharp {
// 		fixed(width: 50) {
// 			...GatsbyImageSharpFixed_withWebp
// 		}
// 	}
// }
