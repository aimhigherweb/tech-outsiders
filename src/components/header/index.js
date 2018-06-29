import React, {Fragment, Component} from 'react';
import { NavLink } from 'react-router-dom';
import Helmet from 'react-helmet';
import Media from 'react-media';
import ReactSVG from '@amykate/react-svg';

//Resources
// import './style.scss';
import {menuItems} from '../app/index.js';
import { Menu, X } from 'react-feather';
import Favicon from '../../img/favicon.png';
import Logo from '../../img/logo.svg';



const Meta = () => {
    return (
        <Helmet>
            <meta name="twitter:card" content="summary_large_image" />
            <link rel="shortcut icon" href={Favicon} />
            <link rel="icon" sizes="192x192" href={Favicon} />
            <link rel="apple-touch-icon" href={Favicon} />
            <meta name="theme-color" content="#1C75BC" />
            <link rel="mask-icon" href={Favicon} color="#1C75BC" />
            <base href="/" />
        </Helmet>
    );
};
  

class Header extends Component {
    render() {        
        return (
            <Fragment>
                <Meta />
                <SiteTitle />
                <MainMenu />
            </Fragment>
        );
    };
};

const SiteTitle = () => (
    <a aria-label="Logo linked to homepage" href="/">
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

export default Header;
