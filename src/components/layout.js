import React, { Fragment } from "react"
import Helmet from 'react-helmet'

import Header from './header.js'
import Footer from './footer.js'

import '../scss/global.scss'
import '../scss/content.scss'

import Logo from '../img/logo.png'


const Layout = ({children, meta}) => (
    <Fragment>
        <Meta {...meta} />
        <header>{<Header />}</header>
        <main>{children}</main>
        <footer>{<Footer />}</footer>
    </Fragment>
)

const Meta = ({name, description, slug, image}) => {
    let siteUrl = 'https://techoutsiders.com.au';

    if (!image) {
        image = Logo;
    }
 
    return (
        <Helmet>
            <title>{name}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={siteUrl + slug} />
            <meta name="twitter:card" content="summary_large_image" />
            <link rel="shortcut icon" href={Logo} />
            <link rel="icon" sizes="192x192" href={Logo} />
            <link rel="apple-touch-icon" href={Logo} />
            <meta name="theme-color" content="#b21e6f" />
            <link rel="mask-icon" href={Logo} color="#b21e6f" />
            <base href="/" />

            {/* Facebook */}
            <meta property="og:url" content={siteUrl + slug} />
            
            <meta property="og:title" content={name} />
            <meta property="og:image" content={image} />
            <meta property="og:description" content={description} />

            {/* Twitter */}
            <meta name="twitter:url" content={siteUrl + slug} />
            <meta name="twitter:title" content={name} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default Layout