import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import { Socials, SpeakerBlock } from '../components/parts'

import '../scss/home.scss'

const oldLocations = {
	// 'brisbane_qld': "Brisbane, Queensland",
	melbourne_vic: 'Melbourne, Victoria',
	perth_wa: 'Perth, Western Australia',
	// 'sydney_nsw': "Sydney, New South Wales",
}

export default class FilteredSpeakers extends Component {
	filterLocation(event) {
		let city = event.target.value

		if (city != '') {
			window.location = '/' + city
		} else {
			window.location = ''
		}
	}

	render() {
		const data = this.props.data,
			{ edges: profiles } = data.profiles,
			{ edges: locations } = data.locations,
			meta = {
				name: data.site.siteMetadata.title,
				description: data.site.siteMetadata.description,
				slug: data.site.siteMetadata.siteUrl,
			},
			shuffle = function(o) {
				for (
					var j, x, i = o.length;
					i;
					j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
				);
				return o
			},
			speakersList = shuffle(profiles),
			thisUrl = typeof window !== `undefined` ? window.location.pathname : ''
		let locationList = [],
			includedCountries = [],
			currentCity

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
							<optgroup label={country.country}>
								{country.cities.map(city => {
									let selected = thisUrl.includes(city.slug) ? true : false
									currentCity = thisUrl.includes(city.slug)
										? `${city.name}, ${city.state}`
										: currentCity

									return (
										<option selected={selected} value={city.slug}>{`${
											city.name
										}, ${city.state}`}</option>
									)
								})}
							</optgroup>
						))}
					</select>
				</div>
				<div className="speakers-list">
					{speakersList.length < 1 ? (
						<p>
							Looks like we don't have anyone listed for {currentCity} yet. Have a
							look at the <Link to="about">About</Link> page to find out how to add
							new speaker profiles.
						</p>
					) : (
						speakersList.map(speaker => (
							<SpeakerBlock speakerProfile={speaker} key={speaker.node.id} />
						))
					)}
				</div>
			</Layout>
		)
	}
}

export const pageQuery = graphql`
	query($city: String) {
		site {
			siteMetadata {
				title
				description
				siteUrl
			}
		}
		profiles: allMarkdownRemark(
			sort: { order: ASC, fields: [frontmatter___title] }
			filter: {
				frontmatter: { newLocation: { eq: $city } }
				fileAbsolutePath: { regex: "/src/profiles//" }
			}
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
						profileImage
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
