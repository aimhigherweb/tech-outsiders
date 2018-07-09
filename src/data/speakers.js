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
        mentoring: (
            <p>Amy believes in giving back to the community and helps out as a mentor at a variety of different events including Perth Web Girls and Node Girls Perth. She's also spoken at multiple JuniorDev meetups and enjoys spending time encouraging new and junior developers.</p>
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
        tagline: 'Accessibility Consultant',
        bio: (
            <p>Julie is an accessibility expert with over 15 years experience as a front-end web developer in the health and education sectors. She believes in the democratic web and helps organisations make their websites inclusive of everyone. In her spare time, she knits very slowly and chases very quickly after her two whippets.</p>
        ),
        social: {
            codepen: 'https://codepen.io/stringyland/',
            github: 'https://github.com/stringyland',
            linkedin: 'https://www.linkedin.com/in/julie-grundy-620551a/',
            twitter: 'https://twitter.com/stringy',
            website: 'http://www.juliegrundy.id.au/',
            featured: [
                'website',
                'twitter',
                'github'
            ]
        },
        talks: [
            {
                name: 'Accessiblity Basics',
                date: '21 March 2018',
                event: 'Junior Dev meetup, Melbourne',
                eventLink: 'http://juniordev.io/',
                link: 'http://juliegrundy.id.au/links/basics.html'
            },
            {
                name: 'Can You See That OK?',
                date: '20 March 2018',
                event: 'CSS Conf AU',
                eventLink: 'https://2018.cssconf.com.au/',
                link: 'https://noti.st/stringy/KMVouj/can-you-see-that-ok'
            },
            {
                name: 'Inclusive JavaScript',
                date: '5 August 2017',
                event: 'Camp JS',
                eventLink: 'http://viii.campjs.com/'
            }
        ],
    },
    {
        name: 'Michelle Sandford',
        slug: 'michelle-sandford',
    },
    {
        name: 'Ming Johanson',
        slug: 'ming-johanson',
        tagline: 'Mother of Unicorns + Social Nerd',
        bio: (
            <p>Ming takes a unique approach to deconstruct complex technologies and couple them with an in-depth understanding of social media tools. She is able to create and integrate this knowledge into a palatable change management training program for all levels of business, to transform the future focus for organisations. Ming is an elected board member of the WA branch of the Australian Computer Society. She is also a spokesperson for Mental Health and an Ambassador for R U OK? Day. Ming can speak on a range of topics including dealing with mental health, diversity, rising above adversity, social media and leadership.</p>
        ),
        social: {
            twitter: 'http://twitter.com/@MingJohanson',
            linkedin: 'https://au.linkedin.com/in/mingjohanson',
            facebook: 'https://facebook.com/MingJohansonPage',
            website: 'https://mingjohanson.com.au/',
            featured: [
                'twitter',
                'linkedin',
                'facebook'
            ]
        }
    },
];

export default speakers;