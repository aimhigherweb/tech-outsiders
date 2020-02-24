import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import {
	BookOpen,
	Codepen,
	Facebook,
	GitHub,
	Gitlab,
	Globe,
	Instagram,
	Linkedin,
	Link2,
	Twitter,
	Youtube,
} from 'react-feather'

import Notist from '../img/notist.svg'

export const Socials = ({ platform, socialTitle, url }) => {
	let icon,
		linkTitle = platform.charAt(0).toUpperCase() + platform.slice(1) + ' profile'

	switch (platform) {
		case 'blog':
			icon = <BookOpen />
			break
		case 'codepen':
			icon = <Codepen />
			break
		case 'facebook':
			icon = <Facebook />
			break
		case 'github':
			icon = <GitHub />
			break
		case 'gitlab':
			icon = <Gitlab />
			break
		case 'instagram':
			icon = <Instagram />
			break
		case 'linkedin':
			icon = <Linkedin />
			break
		case 'twitter':
			icon = <Twitter />
			break
		case 'website':
			icon = <Globe />
			break
		case 'youtube':
			icon = <Youtube />
			break
		case 'notist':
			icon = <Notist />
			break
		default:
			icon = <Link2 />
	}

	if (socialTitle) {
		linkTitle = socialTitle
	} else if (platform.includes('website')) {
		linkTitle = 'website'
	} else if (platform.includes('blog')) {
		linkTitle = 'blog'
	}

	return (
		<a href={url} className="social-link" target="_blank" title={'Link to ' + linkTitle}>
			{icon}
		</a>
	)
}

export const SpeakerBlock = ({ speakerProfile }) => {
	let details = speakerProfile.node.frontmatter,
		tagline = <p className="tagline">{details.tagline}</p>

	let socialLinks = details.socials.map(profile => {
		if (profile.featured) {
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
		}
	})

	if (details.profileImage == null) {
		console.log(details)
	}

	return (
		<div  className="speaker">
			{/* <Img
				fixed={details.profileImage.childImageSharp.fixed}
				alt={'Speaker Profile Photo of ' + details.title}
				style={{ width: '90%', height: 'auto', minHeight: '150px', display: 'block' }}
				imgStyle={{ width: '100%', position: 'none', height: 'auto' }}
			/> */}
			<h2><Link to={speakerProfile.node.fields.slug}>{details.title}</Link></h2>
			{tagline}
			<div className="socials">{socialLinks}</div>
		</div>
	)
}
