import React from 'react'

import Layout from '../components/layout'

import '../scss/about.scss'

const meta = {
	name: 'Tech Outsiders',
	description:
		'It is our mission to solve that problem by highlighting all of the marvellous talent the Tech Industry has outside of the default.',
	slug: '/about',
}

const About = () => (
	<Layout meta={meta} scrolled>
		<h1>About Tech Outsiders</h1>
		<p>
			Tech Outsiders is a social enterprise based in WA that is raising awareness of all the
			cool people we have working in tech who are outside the industry stereotype of the
			"straight white male".
		</p>
		<p>
			The most common response we hear to the complaint "All the speakers at the conference
			are men!" or "All the award nominees are male" is that there were "No known female
			candidates".
		</p>
		<blockquote>
			It is our mission to solve that problem by highlighting all of the marvellous talent the
			tech industry has outside the default
		</blockquote>
		<h2>How can I get on Tech Outsiders?</h2>
		<p>
			If you or someone you know should be on Tech Outsiders, create an account at login to{' '}
			<a href="https://techoutsiders.com.au/admin/" target="_blank">
				techoutsiders.com.au/admin
			</a>{' '}
			and create a new speaker profile. You can view the profile straight away (give or take a
			couple of minutes) on{' '}
			<a href="https://dev.techoutsiders.com.au/" target="_blank">
				dev.techoutsiders.com.au
			</a>{' '}
			and once the Tech Outsiders team has confirmed everything is accurate it'll appear on
			the live site as well.
		</p>
		<h2>How can I update my Tech Outsiders profile?</h2>
		<p>
			This is the same as creating a new profile. Just login to{' '}
			<a href="https://techoutsiders.com.au/admin/" target="_blank">
				techoutsiders.com.au/admin
			</a>{' '}
			and edit your speaker profile. We'll check the information again and make them available
			on the live site.
		</p>
		<h2>Any Questions or Issues?</h2>
		<p>
			Get in touch with us on{' '}
			<a href="https://twitter.com/TechOutsiders" target="_blank">
				Twitter
			</a>{' '}
			or lodge an issue on{' '}
			<a href="https://github.com/AimHigher-Web-Design/tech-outsiders" target="_blank">
				Github
			</a>{' '}
			if something isn't working properly.
		</p>
	</Layout>
)

export default About
