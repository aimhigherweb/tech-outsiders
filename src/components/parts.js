import React from 'react'

import {BookOpen, Codepen, Facebook, Github, Gitlab, Globe, Instagram, Linkedin, Link2, Twitter, Youtube} from 'react-feather';

import Notist from '../img/notist.svg'

export const Socials = ({platform, socialTitle, url}) => {
	let icon,
        linkTitle = platform.charAt(0).toUpperCase() + platform.slice(1) + ' profile';
	
	switch (platform) {
		case 'blog':
			icon = <BookOpen /> ;
			break;
		case 'codepen':
			icon = <Codepen />
			break;
		case 'facebook':
			icon = <Facebook />;
			break;
		case 'github':
			icon = Github;
			break;
		case 'gitlab':
			icon = <Gitlab />
			break;
		case 'instagram':
			icon = <Instagram />;
			break;
		case 'linkedin':
			icon = <Linkedin />;
			break;
		case 'twitter':
			icon = <Twitter />;
			break;
		case 'website':
			icon = <Globe />;
			break;
		case 'youtube':
			icon = <Youtube />;
			break;
		case 'notist':
			icon = <Notist />;
			break;
		default:
			icon = <Link2 />;
	}

	if(socialTitle) {
		linkTitle = socialTitle;
	} 
	else if(platform.includes('website')) {
		linkTitle = 'website';
	}
	else if(platform.includes('blog')) {
		linkTitle = 'blog';
	}

	return (
		<a href={url} className="social-link" target="_blank" title={'Link to ' + linkTitle}>
			{icon}
		</a>
	);
};