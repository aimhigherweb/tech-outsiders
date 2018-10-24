import React, {Fragment, Component} from 'react';
import Helmet from 'react-helmet';

//Resources
// import './style.scss';
// import {menuItems} from '../app/index.js';
import { Menu, X } from 'react-feather';
import Favicon from '../img/favicon.png';
import Logo from '../img/logo.svg';
import Background from '../img/hero.jpg';
// import Content from '../../data/content.js';

const Header = () => (
    <Fragment>
        <div className="background">
            {/* <img src={Background} /> */}
        </div>
        {/* <SiteTitle /> */}
        {/* <Hero /> */}
    </Fragment>
)

// const SiteTitle = () => (
//     <a className="site-logo" aria-label="Logo linked to homepage" href="/">
//         {/* <Logo /> */}
//     </a>
// );


// const Hero = () => (
//     <div className="hero">
//         <blockquote className="full">
//             {/* {Content.heroContent.full} */}
//         </blockquote>
//         <blockquote className="short">
//             {/* {Content.heroContent.short} */}
//         </blockquote>
//     </div>
// );

export default Header;
