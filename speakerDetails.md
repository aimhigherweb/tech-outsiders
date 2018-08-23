# Speaker Details

When adding new speaker details, we have the following fields:


*Name:* This is your full name, can also include any titles/qualifications (eg. Dr or Prof)
*Tagline:* This can be anything you like, but keep it to between 5 and 10 words (check the profile, it's a short phrase). This will preferably be either your job title or something you're known as
*Profile Image:* Images will be used as a 300px * 300px square, they must be at least this big and it's useful if you make it smaller for us.
*Location:* Where you're predominantly based, please specify if we don't have yours yet
*Bio:* This should be not too long, probably just a few paragraphs will do.
*Mentoring:* Similar to your bio, this is a good spot to highlight any mentoring that you have done or are doing.
*Social Profiles*: Links to various profiles, websites or blogs, include the name and link, eg.
- Facebook
- Twitter
- LinkedIn
- Instagram
- GitHub
- Codepen
- Website
- Portfolio
- Blog
On the homepage, only 3 links will be featured on the profile cards, if you have more than 3 cards, tick the boxes for the profiles you want to feature.
If you would like to provide a different link, submit a feature request.
*Talks:* Talks that you have done previously, whether this is at a meetup event, conference or somewhere else. This should include the title of the talk (if you've done the same talk at multiple events, list them all!), the event that you did it at (Conference, meetup group, etc), the date that you did it, a link to the event (eg. Conference or Meetup Group site) and if you have it links to the slides or a video of the talk.

The speaker information is in json format, use the template below:
```
{
        name: 'My Name',
        slug: 'firstname-lastname',
        location: 'perth',
        tagline: 'Awesome Tech Outsider',
        bio: (
            <Fragment>
                <p>This is the bio about me. Make sure you use your HTML tags as well!</p>
                <p>If you have more than one paragraph, wrap them all in the `<Fragment>` tag, this is so the website won't throw a tantrum but it doesn't add unnecessary elements.</p>
            </Fragment>
        ),
        mentoring: (
            <p>I do some mentoring stuff here</p>
        ),
        social: {
            blog: {
                name: 'The Name of my Blog',
                link: 'https://myblog.com.au',
            },
            blog2: {
                name: 'I have another blog',
                link: 'http://myblog-thesecond.com',
            },
            codepen: 'https://codepen.io/',
            facebook: 'https://www.facebook.com/aimhigherwebdesign',
            github: 'https://github.com/AimHigher-Web-Design/tech-outsiders',
            instagram: 'https://www.instagram.com/',
            linkedin: 'https://www.linkedin.com/company/techoutsiders/',
            twitter: 'https://twitter.com/TechOutsiders',
            website: 'https://techoutsiders.com.au',
            featured: [
                'website',
                'twitter',
                'linkedin'
            ],
        },
        talks: [
            {
                title: 'The name of my talk',
                date: '20 Jun 2018',
                event: 'The event I talked at',
                eventLink: 'Link to the event I talked at (optional)',
                link: 'Link to my talk slides/video (optional)',
            },
        ],
    },
```