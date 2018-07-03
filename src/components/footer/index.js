import React, {Component, Fragment} from 'react';
import { NavLink } from 'react-router-dom';

//Resources
import {Github, Linkedin, Twitter} from 'react-feather';
import {legalItems} from '../app/index.js';
import './style.scss';

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

class Footer extends Component {
    render() {
        return (
            <Fragment>
				<FooterNav />
				<FooterSocial />
            </Fragment>
        );
    };
};

const FooterNav = () => {
	let legalNav = legalItems.map((legalItem) => {
		return (
			<NavLink key={legalItem.title} to={legalItem.slug} activeClassName="current">
				{legalItem.title}
			</NavLink>
		);
	});

	return (
		<nav>
			<NavLink to="/" activeClassName="current">
				Home
			</NavLink>
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