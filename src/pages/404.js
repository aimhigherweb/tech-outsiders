import React from 'react'

import Layout from '../components/layout'

import '../scss/about.scss'

const meta = {
	name: 'Page not Found | Tech Outsiders',
	description: "Whoops, looks like something went wrong and we've lost the page you were looking for",
	slug: '',
};

const FourOhFour = () => (
	<Layout meta={meta} scrolled>
		<h1>404 Page Not Found</h1>
		<p>Whoops, looks like something went wrong and we've lost the page you were looking for</p>
		<p>Try going back to <a href="/">home</a> and looking for it again.</p>
	</Layout>
)

export default FourOhFour;