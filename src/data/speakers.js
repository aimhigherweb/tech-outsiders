import React, {Fragment} from 'react';

const speakers = [
    {
        name: 'Amy Kapernick',
        slug: 'amy-kapernick',
        tagline: 'Front End Jedi, Tech Evangelist, Dog Lover',
        bio: (
            <Fragment>
                <p>Amy is a freelance developer, <a href="https://aimhigherwebdesign.com.au/" target="_blank">starting her own business</a>, working with other freelancers and learning everything she can about the web. She’s been a freelancer on the side for 4 years, and most recently worked at an agency in Subiaco.</p><p>Amy also spends her time helping out as a co-organiser for <a href="https://fenders.co/" target="_blank">Fenders</a> (a community group of front-end developers in Perth), other community events (such as Perth Web Girls) and works as an evangelist for YOW! Conference. She <a href="https://amygoestoperth.com.au/" target="_blank">blogs in her spare time</a> (about tech, the web and life), and volunteers as a reviewer for the Fringe World Festival in Perth. Amy has also started <a href="https://thefreelance.guide/" target="_blank">The Freelance Guide</a> to help other freelancers.</p>
            </Fragment>
        ),
        social: {
            blog: 'https://amygoestoperth.com.au/',
            blog2: 'http://thefreelance.guide',
            codepen: 'https://codepen.io/aimhigherwebdesign-amy/',
            facebook: 'https://www.facebook.com/aimhigherwebdesign',
            github: 'https://github.com/amykapernick/amygoestoperth',
            instagram: 'https://www.instagram.com/amys_kapers/',
            linkedin: 'https://www.linkedin.com/in/amykapernick/',
            twitter: 'https://twitter.com/amys_kapers',
            website: 'https://aimhigherwebdesign.com.au/',
            featured: [
                'blog2',
                'github',
                'twitter'
            ],
        },
        talks: [
            {
                title: 'So you think you know HTML?',
                date: '20 Jun 2018',
                event: 'Fenders',
                eventLink: 'https://fenders.co',
            },
            {
                title: 'CSS Grid - What is this magic?!',
                date: '21 Mar 2018',
                event: 'JuniorDev Melbourne',
                eventLink: 'https://www.meetup.com/en-AU/Junior-Developers-Melbourne/',
                link: 'https://slides.com/amykapernick/css-grid-what-is-this-magic',
            },
            {
                title: 'The Art of Failure',
                date: '30 Nov 2017',
                event: 'JuniorDev Perth',
                eventLink: 'https://www.meetup.com/en-AU/Junior-Developers-Perth/',
                link: 'https://slides.com/amykapernick/art-of-failure',
            }
        ],
    },
    {
        name: 'Julie Grundy',
        slug: 'julie-grundy',
    },
    {
        name: 'Michelle Sandford',
        slug: 'michelle-sandford',
    },
    {
        name: 'Ming Johanson',
        slug: 'ming-johanson',
    },
];

export default speakers;