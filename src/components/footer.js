import React, {Component, Fragment} from 'react';

//Resources
import {Github, Linkedin, Twitter} from 'react-feather';
// import './style.scss';
import AimHigher from '../img/aimhigher.svg';

const menuItems = [
	{
		name: 'github',
		icon: <Github />,
		url: 'https://github.com/AimHigher-Web-Design/tech-outsiders',
	},
	{
		name: 'linkedin',
		icon: <Linkedin />,
		url: 'https://www.linkedin.com/company/techoutsiders/',
	},
	{
		name: 'twitter',
		icon: <Twitter />,
		url: 'https://twitter.com/TechOutsiders',
	},
];

const legalItems = [
	{
	  slug: '/about',
	  title: 'About',
	}
];  

const Footer = () => (
	<Fragment>
		<FooterNav />
		<FooterSocial />
		<a href="https://aimhigherwebdesign.com.au" target="_blank" rel="nofollow" className="aimhigher" title="Made and Developed by AimHigher Web Design">
			<AimHigher />
		</a>
	</Fragment>
)

const FooterNav = () => {
	let legalNav = legalItems.map((legalItem) => {
		return (
			<a key={legalItem.title} href={legalItem.slug} activeClassName="current">
				{legalItem.title}
			</a>
		);
	});

	return (
		<nav>
			<a href="/" activeClassName="current">
				Home
			</a>
			{legalNav}
		</nav>
	);
};

const FooterSocial = () => {
	let socialNav = menuItems.map((menuItem) => {
		return (
			<a href={menuItem.url} key={menuItem.name} target="_blank">
				{menuItem.icon}
			</a>
		);
	});

	return (
		<nav>{socialNav}</nav>
	);
};

export default Footer;