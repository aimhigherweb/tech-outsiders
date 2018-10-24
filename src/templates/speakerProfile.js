import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'


export const SpeakerProfileTemplate = ({name}) => {

    return (
        <article>
                <h1>{name}</h1>
        </article>
    )
}

SpeakerProfileTemplate.propTypes = {
    name: PropTypes.string,
}

const SpeakerProfile = ({ data }) => {
    const { markdownRemark: post } = data

    const speakerProfile = {
        name: post.frontmatter.name,
    }

    const meta = {
        // name: post.frontmatter.title + ' | ' + data.site.siteMetadata.title,
        // description: post.frontmatter.description,
        // slug: data.site.siteMetadata.siteUrl + post.fields.slug,
    };

    return (
        <Layout meta={meta}>
            <SpeakerProfileTemplate {...speakerProfile} />
        </Layout>
    )
}

SpeakerProfile.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default SpeakerProfile

export const pageQuery = graphql`
    query SpeakerProfileID($id: String!) {
        site {
            siteMetadata {
                title
                siteUrl
            }
        }
        markdownRemark(id: { eq: $id }) {
            id
            fields {
                slug
            }
            frontmatter {
                name
            }
        }
    }
`
