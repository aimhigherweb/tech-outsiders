module.exports = {
    siteMetadata: {
        title: 'Tech Outsiders',
        description: 'It is our mission to solve that problem by highlighting all of the marvellous talent the Tech Industry has outside of the default.',
        siteUrl: 'https://techoutsiders.com.au'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                include: './src/img/'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
              path: `${__dirname}/src/img`,
              name: 'images',
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                {
                  resolve: `gatsby-remark-images`,
                  options: {
                    maxWidth: 300,
                    withWebp: true
                  }
                },
                "gatsby-remark-copy-linked-files",
              ]
            }
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/profiles`,
                name: "markdown-pages",
            },
        },
        {
            resolve: `gatsby-plugin-google-tagmanager`,
            options: {
              id: "GTM-MXRQ3BP",
              includeInDevelopment: true,
            },
        },
        'gatsby-plugin-netlify-cms',
        {
            resolve: `gatsby-plugin-netlify`,
            options: {
            },
        },
    ],
}