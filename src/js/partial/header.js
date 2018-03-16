import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactSVG from 'react-svg';

//Components
import { App, menuItems } from './app.js';

//Resources
import Logo from '../../img/logo.svg';
import { Menu } from 'react-feather';
import '../../scss/partials/header.scss';

export class Header extends React.Component {
	render() {
		return (
			<div className="inner">
				<SiteTitle />
				<MainMenu />
			</div>
		);
	}
}

const SiteTitle = (logo) => (
	<div className="site-logo">
		<a aria-label="Logo linked to homepage" href="/">
			<ReactSVG path={Logo} />
		</a>
	</div>
);

class MainMenu extends React.Component {
	mobileMenu() {
		if (document.getElementsByClassName('main menu active').length < 1) {
			document.getElementById('nav-main').classList.add('active');
		} else {
			document.getElementById('nav-main').classList.remove('active');
		}
	}

	render() {
		let navItems = menuItems.map((navItem) => {
			return (
				<li key={navItem.title} className={'' + navItem.class}>
					<NavLink to={navItem.slug} activeClassName="current">
						{navItem.title}
					</NavLink>
				</li>
			);
		});

		return (
			<nav id="nav-main" className="menu main">
				<button className="hamburger" onClick={this.mobileMenu}>
					<Menu />
				</button>
				<ul>{navItems}</ul>
			</nav>
		);
	}
}
