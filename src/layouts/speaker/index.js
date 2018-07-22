import React, { Component, Fragment } from 'react';

//Components
import {Meta} from '../../components/parts/index.js';
import {Socials} from '../home/index.js';

//Resources
import './style.scss';
import speakers, {locations} from '../../data/speakers.js';
import {images} from '../home/index.js';

const meta = {
	name: 'Tech Outsiders',
	description: 'It is our mission to solve that problem by highlighting all of the marvellous talent the Tech Industry has outside of the default.',
	slug: '',
};

const SpeakerProfile = ({location}) => {
    let pageSlug = location.pathname,
        speaker = '',
        noPage = false,
        socials = [],
        locate,
        city,
        image,
        talks,
        talksList = [];

    pageSlug = pageSlug.replace(/^\//, '');

    speaker = speakers.filter(peep => peep.slug == pageSlug);

    if(speaker.length == 0) {
        pageSlug = '404';
    }
    else {
        speaker = speaker[0];
        socials = Object.keys(speaker.social);
        locate = speaker.location;
        city = locations[locate];
    }

    image = speaker.slug + '.jpg';

    if (images[image] == undefined) {
		image = 'placeholder.jpg';
	}

    if(speaker.talks) {
        talksList = speaker.talks;
    }

    talks = talksList.map((talk) => (
        <Talk talk={talk} key={talk.name} />
    ));

    let socialLinks = socials.map((profile) => {
		if(profile != 'featured') {
            if(speaker.social[profile].name) {
                return (
                    <Socials type={profile} link={speaker.social[profile].link} key={profile} title={speaker.social[profile].name} />
                );
            }
            else {
                return (
                    <Socials type={profile} link={speaker.social[profile]} key={profile} />
                );
            }
        }
	});
    return (
        <Fragment>
            <Meta {...meta} />
            <div className="details">
                <h1>{speaker.name}</h1>
                <img src={images[image]} alt={'Speaker Profile Photo of ' + speaker.name} />
                <p className="tagline">{speaker.tagline}</p>
                <p className="location">{city}</p>
                <div className="socials">
                    {socialLinks}
                </div>
            </div>
            {speaker.bio &&
                <Fragment>
                    <h2>Bio</h2>
                    <div className="bio">{speaker.bio}</div>
                </Fragment>
            }
            {speaker.mentoring &&
                <Fragment>
                    <h2>Mentoring</h2>
                    <div className="mentor">{speaker.mentoring}</div>
                </Fragment>
            }
            {speaker.talks &&
                <Fragment>
                    <h2>Speaker Experience</h2>
                    <div className="talks">
                        {talks}
                    </div>
                </Fragment>
            }
        </Fragment>
    );
};

const Talk = ({talk}) => (
    <div className="talk" key={talk.title}>
        <p className="date">{talk.date}</p>
        <p className="event">
            {talk.eventLink ? 
                <a href={talk.eventLink} target="_blank" title={'Link to ' + talk.event}>{talk.event}</a>
            :
                talk.event
            } 
        </p>
        <p className="title">
            {talk.link ? 
                <a href={talk.link} target="_blank" title={'Link to presentation for ' + talk.title}>{talk.title}</a>
            :
                talk.title
            } 
        </p>
    </div>
);

export default SpeakerProfile;