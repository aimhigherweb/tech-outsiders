import React, {Fragment} from 'react';

//Resources
import '../scss/header.scss';
import Logo from '../img/logo.svg';
import Background from '../img/banner.jpg';

const HeroContent = {
    short: (
        <Fragment>
            It is our mission to solve that problem by highlighting all of the marvellous talent the Tech Industry has outside of the default.
        </Fragment>
    ),
    full: (
        <Fragment>
            <p>The most common response we hear to the complaint that “All the Speakers at the Conference are men!” or “All the Award Nominees are male.” is that there were “No known female candidates”.</p>
            <p>It is our mission to solve that problem by highlighting all of the marvellous talent the Tech Industry has outside of the default.</p>
        </Fragment>
    )
};

const Header = () => (
    <Fragment>
        <div className="background">
            <img src={Background} />
        </div>
        <SiteTitle />
        <Hero />
    </Fragment>
)

const SiteTitle = () => (
    <a className="site-logo" aria-label="Logo linked to homepage" href="/">
        <Logo />
    </a>
);


const Hero = () => (
    <div className="hero">
        <blockquote className="full">
            {HeroContent.full}
        </blockquote>
        <blockquote className="short">
            {HeroContent.short}
        </blockquote>
    </div>
);

export default Header;
