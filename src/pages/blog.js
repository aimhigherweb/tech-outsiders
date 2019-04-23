import React from 'react'

import Layout from '../components/layout'

const meta = {
	name: 'Tech Outsiders',
	description:
		'It is our mission to solve that problem by highlighting all of the marvellous talent the Tech Industry has outside of the default.',
	slug: '/blog',
}

const Blog = () => (
	<Layout meta={meta} scrolled>
		<h1>Blog</h1>
	</Layout>
)

export default Blog
