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

export default class IndexPage extends React.Component {
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
        const { edges: posts } = data.allMarkdownRemark
        const meta = {
            name: data.site.siteMetadata.title,
            description: data.site.siteMetadata.description,
            slug: data.site.siteMetadata.siteUrl,
        };

        let speakersList = posts.map((speaker) => (
			<Speaker speakerProfile={speaker} key={speaker.node.id} />
        ));
        
        let cities = Object.entries(locations).map((city) => (
			<option value={city[0]}>{city[1]}</option>
		));

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

IndexPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
                description
                siteUrl
            }
        }
        allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___title] }
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