import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';

//Components
import {Meta} from '../../components/parts/index.js';

//Resources
import './style.scss';
import speakers from '../../data/speakers.js';
import {BookOpen, Codepen, Facebook, Github, Gitlab, Globe, Instagram, Linkedin, Link2, Twitter} from 'react-feather';

//Importing Images
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
  
export const images = importAll(require.context('../../img/profiles/', false, /\.(jpg)$/));

const meta = {
	name: 'Tech Outsiders',
	description: 'It is our mission to solve that problem by highlighting all of the marvellous talent the Tech Industry has outside of the default.',
	slug: '',
};

class Home extends Component {
	render() {
		let speakersList = speakers.map((speaker) => (
			<Speaker details={speaker} key={speaker.slug} />
		));

		return (
			<Fragment>
                <Meta {...meta} />
				<div className="speakers-list">
					{speakersList}
				</div>
            </Fragment>
		);
	}
};

const Speaker = ({details}) => {
	let image = details.slug + '.jpg',
		socials,
		tagline = '';
	
	if (!details.social) {
		socials = [];
	}
	else if (details.social.length > 3 || details.social.featured) {
		socials = details.social.featured;
	}
	else {
		socials = Object.keys(details.social);
	}

	let socialLinks = socials.map((profile) => {
		return (
			<Socials type={profile} link={details.social[profile]} key={profile} />
		);
	});

	if (details.tagline) {
		tagline = (<p className="tagline">{details.tagline}</p>);
	};

	return (
		<Link to={details.slug} className="speaker">
			<img src={images[image]} alt={'Speaker Profile Photo of ' + speaker.name} />
			<h2>{details.name}</h2>
			{tagline}
			<div className="socials">
				{socialLinks}
			</div>
		</Link>
	);
};


export const Socials = ({type, link}) => {
	let icon;
	
	switch (type) {
		case 'blog':
		case 'blog2':
			icon = <BookOpen />;
			break;
		case 'codepen':
			icon = <Codepen />
			break;
		case 'facebook':
			icon = <Facebook />;
			break;
		case 'github':
			icon = <Github />
			break;
		case 'Gitlab':
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
		case 'website2':
			icon = <Globe />;
			break;
		default:
			icon = <Link2 />;
	}

	return (
		<a href={link} className="social-link" target="_blank" title={'Link to ' + type + ' profile'}>
			{icon}
		</a>
	);
};

export default Home;