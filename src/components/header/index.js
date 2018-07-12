import React, {Fragment, Component} from 'react';
import { NavLink } from 'react-router-dom';
import Helmet from 'react-helmet';
import Media from 'react-media';
import ReactSVG from 'react-svg';

//Resources
import './style.scss';
import {menuItems} from '../app/index.js';
import { Menu, X } from 'react-feather';
import Favicon from '../../img/favicon.png';
import Logo from '../../img/logo.svg';
import Background from '../../img/hero.jpg';
import Content from '../../data/content.js';


const Meta = () => {
    return (
        <Helmet>
            <meta name="twitter:card" content="summary_large_image" />
            <link rel="shortcut icon" href={Favicon} />
            <link rel="icon" sizes="192x192" href={Favicon} />
            <link rel="apple-touch-icon" href={Favicon} />
            <meta name="theme-color" content="#b21e6f" />
            <link rel="mask-icon" href={Favicon} color="#b21e6f" />
            <base href="/" />
        </Helmet>
    );
};
  

class Header extends Component {
    render() {        
        return (
            <Fragment>
                <Meta />
                <div className="background">
                    <img src={Background} />
                </div>
                <SiteTitle />
                <Hero />
            </Fragment>
        );
    };
};

const SiteTitle = () => (
    <a className="site-logo" aria-label="Logo linked to homepage" href="/">
        <ReactSVG path={Logo} />
    </a>
);

const MainMenu = () => {
    let NavItems = menuItems.map((NavItem) => {
        if(!NavItem.hideNav) {
            return (
                <NavLink key={NavItem.title} to={NavItem.slug} className={'' + NavItem.class} activeClassName="current">
                    {NavItem.title}
                </NavLink>
            );
        };
    });

    return (
        <nav id="menu">
            <Media query="(max-width: 40rem)">
                <Fragment>
                    <a id="hamburger" href="#menu">
                        <Menu />
                    </a>
                    <a id="close" href="#">
                        <X />
                    </a>
                </Fragment>
            </Media>
            {NavItems}
        </nav>
    );
}

const Hero = () => (
    <div className="hero">
        <blockquote className="full">
            {Content.heroContent.full}
        </blockquote>
        <blockquote className="short">
            {Content.heroContent.short}
        </blockquote>
    </div>
);

export default Header;
