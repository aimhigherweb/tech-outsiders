import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

//Resources
import '../../scss/layouts/home.scss';

class Meta extends Component {
	render() {
		let name = 'AimHigher Web Design';
		let description = 'Kick start a React project, we did the boring config for you!';
		let slug = '';
		let image = 'https://aimhigherwebdesign.com.au/img/logo.png';
		return (
			<Helmet>
				<title>{name}</title>
				<meta name="description" content={description} />
				<link rel="canonical" href={'https://aimhigherwebdesign.com.au/' + slug} />

				{/* Facebook */}
				<meta property="og:url" content={'https://aimhigherwebdesign.com.au/' + slug} />
				<meta property="og:title" content={name} />
				<meta property="og:image" content={image} />
				<meta property="og:description" content={description} />

				{/* Twitter */}
				<meta name="twitter:url" content={'https://aimhigherwebdesign.com.au/' + slug} />
				<meta name="twitter:title" content={name} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={image} />
			</Helmet>
		);
	}
}

export class Home extends Component {
	render() {
		return (
			<h1>Hello World</h1>
		);
	}
}
