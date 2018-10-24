import React from 'react'

import Layout from '../components/layout'

import '../scss/about.scss'

const meta = {
	name: 'Tech Outsiders',
	description: 'It is our mission to solve that problem by highlighting all of the marvellous talent the Tech Industry has outside of the default.',
	slug: '',
};

const About = () => (
	<Layout meta={meta} scrolled>
		<h1>About Tech Outsiders</h1>
		<p>Tech Outsiders is a social enterprise based in WA that is raising awareness of all the cool people we have working in tech who are outside the industry stereotype of the "straight white male".</p>
		<p>The most common response we hear to the complaint "All the speakers at the conference are men!" or "All the award nominees are male" is that there were "No known female candidates".</p>
		<blockquote>It is our mission to solve that problem by highlighting all of the marvellous talent the tech industry has outside the default</blockquote>
	</Layout>
)

export default About;