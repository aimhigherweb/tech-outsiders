import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import {Socials} from '../components/parts'

import '../scss/home.scss';

const locations = {
    // 'brisbane-qld': "Brisbane, Queensland",
    // 'melbourne-vic': "Melbourne, Victoria",
    'perth-wa': "Perth, Western Australia",
    // 'sydney-nsw': "Sydney, New South Wales",
}

export default class FilteredSpeakers extends React.Component {
    filterLocation(event) {
		let city = event.target.value;

		if(city != '') {
			window.location = "/" + city;
		}
		else {
			window.location = '';
		}
    }
    
    render() {        
        const { data } = this.props
        const { city } = this.props.pageContext
        const { edges: posts } = data.allMarkdownRemark
        const meta = {
            name: data.site.siteMetadata.title,
            description: data.site.siteMetadata.description,
            slug: data.site.siteMetadata.siteUrl,
        };
        
        let thisUrl = window.location.pathname,
            speakersList = posts.map((speaker) => (
			<Speaker speakerProfile={speaker} key={speaker.node.id} />
        )),
        cities = Object.entries(locations).map((city) => {
            if(thisUrl.includes(city)) {
                return <option key={city[0]} value={city[0]} selected>{city[1]}</option>
            }
            else {
                return <option key={city[0]} value={city[0]}>{city[1]}</option>
            }
        });

        return (
            <Layout meta={meta}>
               <div className="filter">
					<label htmlFor="locations">Filter by Location</label>
					<select id="locations" onChange={this.filterLocation}>
						<option value="">Filter by Location</option>
						{cities}
					</select>
				</div>
				<div className="speakers-list">
					{speakersList}
				</div>
            </Layout>
        )
    }
}

const Speaker = ({speakerProfile}) => {
    let details = speakerProfile.node.frontmatter,
		tagline = (<p className="tagline">{details.tagline}</p>);

    let socialLinks = details.socials.map((profile) => {
        if(profile.featured) {
            if(profile.socialTitle) {
                return (
                    <Socials platform={profile.platform} url={profile.url} key={profile.url} socialTitle={profile.socialTitle} />
                );
            }
            else {
                return (
                    <Socials platform={profile.platform} url={profile.url} key={profile.url} />
                );
            }
        }
    })

	return (
		<Link to={speakerProfile.node.fields.slug} className="speaker">
			<img src={details.profileImage} alt={'Speaker Profile Photo of ' + details.title} />
			<h2>{details.title}</h2>
			{tagline}
			<div className="socials">
				{socialLinks}
			</div>
		</Link>
	);
};

FilteredSpeakers.propTypes = {
    pathContext: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.shape({
              frontmatter: PropTypes.shape({
                title: PropTypes.string.isRequired,
              }),
            }),
          }).isRequired
        ),
      }),
    }),
}
  
export const pageQuery = graphql`
    query($city: String) {
        site {
            siteMetadata {
                title
                description
                siteUrl
            }
        }
        allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___title] }
            filter: {frontmatter: { location: {in: [$city]}}}
        ) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        tagline
                        profileImage
                        socials {
                            featured
                            platform
                            socialTitle
                            url
                        }
                    }
                }
            }
        }
    }
`