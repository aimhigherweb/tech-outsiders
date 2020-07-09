import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import { Socials } from '../components/parts'
import Conference from '../img/conference.svg'
import Keynote from '../img/keynote.svg'
import Meetup from '../img/meetup.svg'
import Panel from '../img/panel.svg'
import Podcast from '../img/podcast.svg'
import Workshop from '../img/workshop.svg'

import '../scss/speaker.scss'

const SpeakerProfileTemplate = ({
	name,
	tagline,
	profileImage,
	location,
	bio,
	mentoring,
	socials,
	talks,
}) => {
	let orderedTalks,
		socialLinks = socials && socials.map(profile => {
			if (profile.socialTitle) {
				return (
					<Socials
						platform={profile.platform}
						url={profile.url}
						key={profile.url}
						socialTitle={profile.socialTitle}
					/>
				)
			} else {
				return <Socials platform={profile.platform} url={profile.url} key={profile.url} />
			}
		}),
		image = true

	if (profileImage == null) {
		image = false
	}
	else if (profileImage && !profileImage.childImageSharp) {
		image = false
	}

	orderedTalks = talks && talks.sort((a, b) => {
		let dateA = new Date(a.date),
			dateB = new Date(b.date)

		if (dateA > dateB) {
			return -1
		}
		if (dateA < dateB) {
			return 1
		}
		return 0
	})

	return (
		<Fragment>
			<div className="details">
				<h1>{name}</h1>
				{image && <Img
					fixed={profileImage.childImageSharp.fixed}
					alt={'Speaker Profile Photo of ' + name}
					style={{ display: 'block' }}
				/>}
				<p className="tagline">{tagline}</p>
				{location && (
					<p className="location">
						{location.title}
						{location.state ? `, ${location.state}` : `, ${location.country}`}
					</p>
				)}
				<div className="socials">{socialLinks}</div>
			</div>
			<h2>Bio</h2>
			<div className="bio" dangerouslySetInnerHTML={{ __html: bio }} />
			{mentoring && (
				<Fragment>
					<h2>Mentoring</h2>
					<div className="mentor" dangerouslySetInnerHTML={{ __html: mentoring }} />
				</Fragment>
			)}

			{talks && (
				<Fragment>
					<h2>Speaker Experience</h2>
					<div className="talks">
						{orderedTalks.map(talk => (
							<Talk {...talk} key={`${talk.talkTitle}-${talk.date}`} />
						))}
					</div>
				</Fragment>
			)}
		</Fragment>
	)
}

const Talk = ({ date, event, eventLink, talkTitle, talkLink, eventType }) => {
	let today = new Date(),
		eventDate = new Date(date),
		talk = talkTitle,
		upcoming = '',
		Icon = false

	if (eventDate < today && talkLink) {
		talk = (
			<a href={talkLink} target="_blank" title={'Link to presentation for ' + talkTitle}>
				{talkTitle}
			</a>
		)
	}
	if (eventDate > today) {
		upcoming = 'upcoming'
	}

	switch (eventType) {
		case 'Conference':
			Icon = Conference
			break;
		case 'Workshop':
			Icon = Workshop
			break;
		case 'Keynote':
			Icon = Keynote
			break;
		case 'Meetup':
			Icon = Meetup
			break;
		case 'Panel':
			Icon = Panel
			break;
		case 'Podcast':
			Icon = Podcast
			break;
		default:
			break;
	}

	return (
		<div className={'talk ' + upcoming} key={talkTitle}>
			<p className="date">{date}</p>
			{Icon && <p className="type">{<Icon />}<span>{eventType}</span></p>}
			<p className="title">{talk}</p>
			<p className="event">
				{eventLink ? (
					<a href={eventLink} target="_blank" title={'Link to ' + event}>
						{event}
					</a>
				) : (
						event
					)}
			</p>
		</div>
	)
}

const SpeakerProfile = ({ data }) => {
	const profile = data.profile,
		city = data.city && data.city.frontmatter,
		site = data.site,
		speakerProfile = {
			name: profile.frontmatter.title,
			tagline: profile.frontmatter.tagline,
			profileImage: profile.frontmatter.profileImage,
			location: city,
			bio: profile.html,
			mentoring: profile.frontmatter.mentoring,
			socials: profile.frontmatter.socials,
			talks: profile.frontmatter.talks,
		}

	const meta = {
		name: profile.frontmatter.title + ' | ' + site.siteMetadata.title,
		description: 'The profile page of ' + profile.frontmatter.title,
		slug: profile.fields.slug,
	}

	return (
		<Layout meta={meta} scrolled>
			<SpeakerProfileTemplate {...speakerProfile} />
		</Layout>
	)
}

export default SpeakerProfile

export const pageQuery = graphql`
	query SpeakerProfileID($id: String!, $city: String!) {
		site {
			siteMetadata {
				title
				siteUrl
			}
		}
		profile: markdownRemark(id: { eq: $id }) {
			id
			fields {
				slug
			}
			html
			frontmatter {
				title
				tagline
				profileImage {
					childImageSharp {
						fixed(width: 300) {
							...GatsbyImageSharpFixed_withWebp
						}
					}
				}
				mentoring
				socials {
					platform
					socialTitle
					url
				}
				talks {
					date(formatString: "DD MMM YYYY")
					event
					eventLink
					eventType
					talkTitle
					talkLink
				}
			}
		}
		city: markdownRemark(frontmatter: { title: { eq: $city } }) {
			frontmatter {
				title
				state
				country
			}
		}
	}
`


