import React, { Fragment } from "react"
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer'

// import '../scss/content.scss'
// import '../scss/global.scss'

import HeaderImage from '../img/logo.png'
import Favicon from '../img/logo.png'


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
        image = HeaderImage;
    }
 
    return (
        <Helmet>
            <title>{name}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={siteUrl + slug} />
            <meta name="twitter:card" content="summary_large_image" />
            <link rel="shortcut icon" href={Favicon} />
            <link rel="icon" sizes="192x192" href={Favicon} />
            <link rel="apple-touch-icon" href={Favicon} />
            <meta name="theme-color" content="#b21e6f" />
            <link rel="mask-icon" href={Favicon} color="#b21e6f" />
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