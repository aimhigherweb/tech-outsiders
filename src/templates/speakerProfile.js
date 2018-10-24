import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import {Socials} from '../components/parts'

import '../scss/speaker.scss'


const SpeakerProfileTemplate = ({name, tagline, profileImage, location, bio, mentoring, socials, talks}) => {
    let orderedTalks,
        socialLinks = socials.map((profile) => {
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
    });

    orderedTalks = talks.sort((a, b) => {
        let dateA = new Date(a.date),
            dateB = new Date(b.date);

        if(dateA > dateB) {
            return -1;
        }
        if(dateA < dateB) {
            return 1;
        }
        return 0;
    });
    
    let talksList = orderedTalks.map((talk) => (
        <Talk {...talk} key={talk.name} />
    ));

    return (
        <Fragment>
            <div className="details">
                <h1>{name}</h1>
                <img src={profileImage} alt={'Speaker Profile Photo of ' + name} />
                <p className="tagline">{tagline}</p>
                <p className="location">{location}</p>
                <div className="socials">
                    {socialLinks}
                </div>
            </div>
            {bio &&
                <Fragment>
                    <h2>Bio</h2>
                    <div className="bio"  dangerouslySetInnerHTML={{__html: bio}}></div>
                </Fragment>
            }
            {mentoring &&
                <Fragment>
                    <h2>Mentoring</h2>
                    <div className="mentor">{mentoring}</div>
                </Fragment>
            }
            {talks &&
                <Fragment>
                    <h2>Speaker Experience</h2>
                    <div className="talks">
                        {talksList}
                    </div>
                </Fragment>
            }
        </Fragment>
    )
}

const Talk = ({date, event, eventLink, talkTitle, talkLink}) => {
    let today = new Date(),
        eventDate = new Date(date),
        talk = talkTitle,
        upcoming = '';

    if(eventDate < today && talkLink) {
        talk = (
            <a href={talkLink} target="_blank" title={'Link to presentation for ' + talkTitle}>{talkTitle}</a>
        );
    }
    if(eventDate > today) {
        upcoming = 'upcoming';
    }

    return (
        <div className={'talk ' + upcoming} key={talkTitle}>
            <p className="date">{date}</p>
            <p className="event">
                {eventLink ? 
                    <a href={eventLink} target="_blank" title={'Link to ' + event}>{event}</a>
                :
                event
                } 
            </p>
            <p className="title">
                {talk} 
            </p>
        </div>
    )
};

SpeakerProfileTemplate.propTypes = {
    name: PropTypes.string,
}

const SpeakerProfile = ({ data }) => {
    const { markdownRemark: post } = data

    const speakerProfile = {
        name: post.frontmatter.title,
        tagline: post.frontmatter.tagline,
        profileImage: post.frontmatter.profileImage,
        location: post.frontmatter.location,
        bio: post.html,
        mentoring: post.frontmatter.mentoring,
        socials: post.frontmatter.socials,
        talks: post.frontmatter.talks,
    }

    const meta = {
        name: post.frontmatter.title + ' | ' + data.site.siteMetadata.title,
        description: 'The profile page of ' + post.frontmatter.title,
        slug: post.fields.slug,
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
            html
            frontmatter {
                title
                tagline
                profileImage
                location
                mentoring
                socials {
                    platform
                    socialTitle
                    url
                }
                talks {
                    date(formatString: "DD MMM YYYY")
                    event
                    eventLink
                    talkTitle
                    talkLink
                }
            }
        }
    }
`