module.exports = {
	siteMetadata: {
		title: 'Tech Outsiders',
		description:
			'It is our mission to solve that problem by highlighting all of the marvellous talent the Tech Industry has outside of the default.',
		siteUrl: 'https://techoutsiders.com.au',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				include: './src/img/',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `./src/img`,
				name: 'images',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `./src/img/uploads`,
				name: 'uploaded-images',
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `@raae/gatsby-remark-oembed`,
						providers: {
							include: ['Twitter', 'YouTube'],
						},
					},
					{
						resolve: `gatsby-remark-prettier`,
						options: {
							usePrettierrc: true,
						},
					},
					{
						resolve: `gatsby-remark-figure-caption`,
						options: {
							figureClassName: 'image',
						},
					},
					'gatsby-remark-copy-linked-files',
					{
						resolve: `gatsby-remark-images`,
						options: {
							showCaptions: true,
							maxWidth: 1000,
							widthWebp: true,
						},
					},
				],
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/profiles`,
				name: 'profiles',
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/locations`,
				name: 'locations',
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/blog`,
				name: 'posts',
			},
		},
		{
			resolve: `gatsby-plugin-google-tagmanager`,
			options: {
				id: 'GTM-MXRQ3BP',
				includeInDevelopment: true,
			},
		},
		{
			resolve: `gatsby-plugin-netlify`,
			options: {},
		},
		{
			resolve: 'gatsby-plugin-netlify-cache',
		},
	],
}
