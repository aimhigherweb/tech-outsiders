import React, { Component, Fragment } from 'react';

//Components
import {Meta} from '../../components/parts/index.js';
import {Socials} from '../home/index.js';

//Resources
import './style.scss';
import speakers from '../../data/speakers.js';
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
        socials = [];

        pageSlug = pageSlug.replace(/^\//, '');

    for(let i = 0; i < speakers.length; i++) {
        if(speakers[i].slug == pageSlug) {
            speaker = speakers[i];
            socials = Object.keys(speaker.social);
        };
    }

    if(speaker == '') {
        pageSlug = '404';
    };

    let image = speaker.slug + '.jpg';

    let talks = speaker.talks.map((talk) => (
        <Talk talk={talk} key={talk.name} />
    ));

    let socialLinks = socials.map((profile) => {
		if(profile != 'featured') {
            return (
                <Socials type={profile} link={speaker.social[profile]} key={profile} />
            );
        }
	});
    return (
        <Fragment>
            <Meta {...meta} />
            <div className="details">
                <h1>{speaker.name}</h1>
                <img src={images[image]} alt={'Speaker Profile Photo of ' + speaker.name} />
                <p className="tagline">{speaker.tagline}</p>
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
            <h2>Speaker Experience</h2>
            <div className="talks">
                {talks}
            </div>
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