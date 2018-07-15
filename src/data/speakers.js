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
                link: 'https://talks.amygoestoperth.com.au/so-you-think-you-know-html',
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
                title: 'Accessiblity Basics',
                date: '21 March 2018',
                event: 'JuniorDev Melbourne',
                eventLink: 'http://juniordev.io/',
                link: 'http://juliegrundy.id.au/links/basics.html'
            },
            {
                title: 'Can You See That OK?',
                date: '20 March 2018',
                event: 'CSS Conf AU',
                eventLink: 'https://2018.cssconf.com.au/',
                link: 'https://noti.st/stringy/KMVouj/can-you-see-that-ok'
            },
            {
                title: 'Inclusive JavaScript',
                date: '5 August 2017',
                event: 'Camp JS',
                eventLink: 'http://viii.campjs.com/'
            }
        ],
    },
    {
        name: 'Mandy Michael',
        slug: 'mandy-michael',
        tagline: 'Front End Developer, Manager and Speaker',
        bio: (
            <p>Mandy is a community organiser, speaker, and developer working as a Development Manager at Seven West Media in Western Australia.  She is a co-organiser and Director of <a href="http://mixinconf.com/" target="_blank" rel="nofollow">Mixin Conf</a>, and the founder and co-organiser of <a href="http://www.fenders.co" target="_blank" rel="nofollow">Fenders</a>, a local meetup for front end developers providing events, mentoring and support to the Perth web community.
            Mandy’s passion is CSS, HTML and JS and hopes to inspire that passion in others. She loves the supportive and collaborative nature of the web and strives to encourage this environment through the community groups she is a part of. Her aim is to create a community of web developers who can share, mentor, learn and grow together.</p>
        ),
        mentoring: (
            <p>Ultimately Mandy believes the best way to contribute to the web is by helping and supporting others. Through Fenders Mandy provides opportunities, mentoring, guidance and support to help people with their technical skills, career progression, public speaking and wellbeing. She has been involved in organising and mentoring at events including Perth&#123;Web&#125;Girls.</p>
        ),
        social: {
            blog: 'https://medium.com/@mandy.michael',
            codepen: 'https://codepen.io/mandymichael/',
            instagram: 'https://www.instagram.com/batmandy/',
            linkedin: 'https://www.linkedin.com/in/mandykerr/',
            twitter: 'https://twitter.com/mandy_kerr',
            website: 'https://mandymichael.com/',
            featured: [
                'codepen',
                'twitter',
                'blog'
            ],
        },
        talks: [
            {
                title: 'Creative Text Effects with CSS',
                date: '29 Jun 2018',
                event: 'Ampersand',
                eventLink: 'http://ampersandconf.com/',
                link: 'https://slides.com/mandymichael/creative-text-effects-with-css-7'
            },
            {
                title: 'Becoming a Front End Developer',
                date: '26 May 2018',
                event: 'Bankwest Code Orange',
            },
            {
                title: 'Workshop: Creative Text Effects with CSS',
                date: '23 Mar 2018',
                event: 'Decompress',
                eventLink: 'https://2018.decompress.com.au/',
            },
            {
                title: 'Panel: How important are Role Models for women in STEM?',
                date: '18 Feb 2018',
                event: 'WiTWA',
                eventLink: 'http://www.witwa.org.au/events/2018/2/21/techxchange-event-leadership-in-tech-the-importance-of-role-models',
            },
            {
                title: 'CSS is Awesome',
                date: '29 Jun 2018',
                event: 'DDDPerth By Night',
                eventLink: 'http://dddperth.com/',
                link: 'https://www.youtube.com/watch?v=oT7Ihsh10x4'
            },
             {
                title: 'Creative Text Effects with CSS',
                date: '23 Jan 2018',
                event: 'Singapore CSS Max.Content',
                eventLink: 'https://singaporecss.github.io/24/',
                link: 'https://engineers.sg/video/creative-text-effects-with-css-talk-css-24-max-content-edition-singaporecss--2244'
            },
             {
                title: 'Creative Text Effects with CSS',
                date: '18 Jan 2018',
                event: 'Fenders',
                eventLink: 'https://fenders.co',
                link: 'https://www.youtube.com/watch?v=lKRdfw4xcGo'
            },
             {
                title: 'Panel on CSS',
                date: '3-4 Aug 2017',
                event: 'Web Directions Code',
                eventLink: 'https://www.webdirections.org/code/',
                link: 'https://www.youtube.com/watch?v=lKRdfw4xcGo',
            },
            {
                title: 'Traditional CSS at Scale',
                date: '3-4 Aug 2017',
                event: 'Web Directions Code',
                eventLink: 'https://www.youtube.com/watch?v=lKRdfw4xcGo',
            },
            {
                title: 'My Journey into Tech',
                date: '20 Jun 2017',
                event: 'Code Like a Girl Melbourne',
                eventLink: 'https://www.meetup.com/codelikeagirlau/',
            },
            {
                title: 'Sharpen Up Your Text with The Power of Three',
                date: '8 - 9 May 2017',
                event: 'Web Directions Respond Melbourne',
                eventLink: 'http://www.webdirections.org/respond/',
                link: 'https://www.webdirections.org/blog/video-ristretto-sharpen-text-mandy-michael/'
            },
           {
                title: 'Sharpen Up Your Text with The Power of Three',
                date: '4 - 5 May 2017',
                event: 'Web Directions Respond Melbourne',
                eventLink: 'http://www.webdirections.org/respond/',
                link: 'https://www.webdirections.org/blog/video-ristretto-sharpen-text-mandy-michael/'
            },
            {
                title: 'Google I/O Conference Download',
                date: '21 Jul 2016',
                event: 'Fenders',
                eventLink: 'http://fenders.co/',
            },
             {
                title: 'Animating SVG',
                date: '28 Jun 2015',
                event: 'Fenders',
                eventLink: 'http://fenders.co/',
            },
            {
                title: 'Introduction to Web Performance',
                date: '14 May 2015',
                event: 'Fenders',
                eventLink: 'http://fenders.co/',
            },
            {
                title: 'The Freedom and Constraints of Virtual Design',
                date: '28 - 29 Nov 2008',
                event: 'Australasian Virtual Worlds Workshop',
            },
        ],
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
        },
        talks: []
    },
];

export default speakers;