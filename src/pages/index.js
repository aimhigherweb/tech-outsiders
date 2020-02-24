import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { SpeakerBlock } from '../components/parts'

import '../scss/home.scss'

export default class IndexPage extends React.Component {
	filterLocation(event) {
		let city = event.target.value

		if (city != '') {
			window.location = '/' + city
		} else {
			window.location = ''
		}
	}

	render() {
		const { data } = this.props,
			{ edges: profiles } = data.profiles,
			{ edges: locations } = data.locations,
			meta = {
				name: data.site.siteMetadata.title,
				description: data.site.siteMetadata.description,
				slug: data.site.siteMetadata.siteUrl,
			},
			shuffle = (array) => {return array.sort(() => Math.random() - 0.5)},
			speakersList = profiles

		let locationList = [],
			includedCountries = []

		locations.forEach(city => {
			if (includedCountries.includes(city.node.frontmatter.country)) {
				locationList.some(country => {
					if (country.country == city.node.frontmatter.country) {
						country.cities.push({
							name: city.node.frontmatter.title,
							state: city.node.frontmatter.state,
							slug: city.node.fields.slug.replace(/\//g, ''),
						})
					}
				})
			} else {
				locationList.push({
					country: city.node.frontmatter.country,
					cities: [
						{
							name: city.node.frontmatter.title,
							state: city.node.frontmatter.state,
							slug: city.node.fields.slug.replace(/\//g, ''),
						},
					],
				})
				includedCountries.push(city.node.frontmatter.country)
			}
		})

		return (
			<Layout meta={meta}>
				<div className="filter">
					<label htmlFor="locations">Filter by Location</label>
					<select id="locations" onChange={this.filterLocation}>
						<option value="">Filter by Location</option>
						{locationList.map(country => (
							<optgroup key={country.country} label={country.country}>
								{country.cities.map(city => (
									<option
										key={city.slug}
										value={city.slug}
									>{`${city.name}, ${city.state}`}</option>
								))}
							</optgroup>
						))}
					</select>
				</div>
				<div className="speakers-list">
					{speakersList.map(speaker => (
						<SpeakerBlock speakerProfile={speaker} key={speaker.node.id} />
					))}
				</div>
			</Layout>
		)
	}
}

export const pageQuery = graphql`
	query IndexQuery {
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
					id
					fields {
						slug
					}
					frontmatter {
						title
						tagline
						profileImage {
							childImageSharp {
								fixed(width: 250) {
									...GatsbyImageSharpFixed_withWebp
								}
							}
						}
						socials {
							featured
							platform
							socialTitle
							url
						}
					}
				}
			}
		}
		locations: allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/src/locations//" } }
			sort: {
				order: ASC
				fields: [frontmatter___country, frontmatter___state, frontmatter___title]
			}
		) {
			edges {
				node {
					fields {
						slug
					}
					fileAbsolutePath
					frontmatter {
						title
						country
						state
					}
				}
			}
		}
	}
`

