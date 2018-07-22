import React, {Fragment} from 'react';

const speakers = [
    {
        name: 'Alison Nicholson',
        slug: 'alison-nicholson',
        location: 'perth',
        bio: (
            <p>An experienced PRINCE2 and Agile Project Manager with over 11 years of proven project management and delivery, together with over 22 years IT experience, both managerial and technical, in the banking (26 years) and social housing sector. Business focused and committed to providing effective management, with excellent communication skills, change management skills and stakeholder/relationship management skills across all levels of an organization. Proven leadership skills involving managing, developing and motivating teams to achieve their objectives. Dedicated to maintaining high standards, ensuring the smooth development and implementation of improved business processes and information systems to meet identified business needs, bringing projects in within agreed parameters of cost, timescales and quality.</p>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180312183623/https:/au.linkedin.com/in/alison-nicholson-msc-50ab2b22'
        },
    },
    {
        name: 'Amy Dix',
        slug: 'amy-dix',
        location: 'perth',
        bio: (
            <p>As an IT Professional I have worked on a number of projects for global resources, oil and gas and government clients. Specialising in Project Delivery, I have worked on major projects within Western Australia and overseas. I am an ambassador for the South 32 Woman in IT program, and strong believer in promoting Diversity in IT.</p>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180312183608/https:/au.linkedin.com/in/amy-dix-12170323',
            facebook: 'https://web.archive.org/web/20180312183608/https:/www.facebook.com/amylaurendix',
        },
    },
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
        name: 'Anle Pretorius',
        slug: 'anle-pretorius',
        location: 'perth',
        bio: (
            <Fragment>
                <p>A passionate Technologist specializing in strategic IT Leadership with a passion for demystifying organizations through Business Analysis and Project Management, leading passionate teams to deliver fit for purpose solutions.</p>
                <p>In her own words: “Technology is a great industry, it drives innovation, not only in all industries, but in our own world and own lives. Technology is personal, and the future is amazing. Now to get in balanced!”</p>
            </Fragment>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180312183534/https:/au.linkedin.com/in/anlepretorius',
        },
    },
    {
        name: 'Anna Burchfield',
        slug: 'anna-burchfield',
        location: 'perth',
        bio: (
            <Fragment>
                <p>Anna Burchfield wandered off the ‘career path’ before she started on it; she is a little bit of everything.</p>
                <p>With a distinct ability to ‘rock a frock’ – this only just falls second her love of Current Affairs and the Digital world. (Both of these fall far behind her love of Doctor Who) Her public and private industry experiences have been characterised by her love of all forms of communication (verbal, written and online) Brand Development, Social Media and Government.</p>
                <p>Anna is an Alumni of both Curtin University (B.A, 2011) and the University of Western Australia (M.A, 2013). She interned for 14 months, unpaid, before securing her first job, and into her current role which has more to do with her passions and interests more than her Tertiary Degrees(!)</p>
                <p>A distinct advocate for ‘Gen Y’ and their experiences in the workplace and the world, she currently works as a Digital Account Co-ordinator at ALYKA in Subiaco.</p>
                <p>She has 9 years working across many industries – Public Relations Consultancy, Image Consultancy and Brand Development, Retail, Digital Media, Marketing Research and Public Affairs.</p>
            </Fragment>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180312183800/https:/au.linkedin.com/in/anna-burchfield-5610211b',
            facebook: 'https://web.archive.org/web/20180312183800/http:/www.facebook.com/TheTangibleBlog/',
            website: 'https://web.archive.org/web/20180312183800/https:/thetangibleblog.wordpress.com/',
            instagram: 'https://web.archive.org/web/20180312183800/http:/www.instagram.com/thetangibleblog/',
            featured: [
                'linkedin',
                'facebook',
                'website',
            ],
        },
    },
    {
        name: 'Barbara Kerr',
        slug: 'barbara-kerr',
        location: 'melbourne',
        bio: (
            <Fragment>
                <p>Barbara Kerr writes words for games. She used to do other things, but likes this best.</p>
                <p>Prior to entering game development, Barbara was a project manager in government. Her expertise is not just in writing but in organisational development, grants management, networking and budgeting.</p>
                <p>Her video games can be played at <a href="https://web.archive.org/web/20180319142710/http:/saint-barbara.tumblr.com/mygames" target="_blank" rel="nofollow">Saint-Barbara Games</a>.</p>
            </Fragment>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180319142710/https:/au.linkedin.com/in/barbara-kerr-639a378',
            twitter: 'https://web.archive.org/web/20180319142710/https:/twitter.com/ms45',
            facebook: 'https://web.archive.org/web/20180319142710/https:/www.facebook.com/ms45zine/',
            website: 'https://web.archive.org/web/20180319142710/http:/saint-barbara.tumblr.com/',
            youtube: 'https://web.archive.org/web/20180319142710/https:/www.youtube.com/user/tismselfstorage',
            blog: 'https://web.archive.org/web/20180319142710/https:/saint-barbara.itch.io/',
            featured: [
                'linkedin',
                'twitter',
                'website',
            ],
        },
    },
    {
        name: 'Bhavneet Singh',
        slug: 'bhavneet-singh',
        bio: (
            <p>Bhavneet Singh, a frustrated artist, a very proud mother, a challenging wife. Bhavneet is the Technologies Curriculum Consultant at AISWA. She is also the Primary coordinator for ECAWA. Bhavneet is passionate about changing the way we do school. She has been the key driver in bringing teachers from all sectors together under the TeachMeet banner. Her motto is #bethechange.</p>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180312183346/http:/au.linkedin.com/in/bhavneet-singh-4a179725',
            twitter: 'https://web.archive.org/web/20180312183346/http:/twitter.com/bhavneetsingh12',
            facebook: 'https://web.archive.org/web/20180312183346/http:/www.facebook.com/singhbhav',
            instagram: 'https://web.archive.org/web/20180312183346/http:/www.instagram.com/bhavneetsingh12',
            youtube: 'https://web.archive.org/web/20180312183346/http:/m.youtube.com/channel/UCClq46aQEDBsdkzwMRAt2XQ',
            website: 'https://web.archive.org/web/20180312183346/http:/bhavneetsingh12.wordpress.com/about/',
            featured: [
                'linkedin',
                'website',
                'twitter',
            ],
        },
    },
    {
        name: 'Charlie Francis',
        slug: 'charlie-francis',
        location: 'melbourne',
        bio: (
            <p>Once described as the person with molten hair from the hip cyberpunk future that never was, Charlie Francis is a queer nb trans masc programmer and game developer. They currently work for Mighty Games in Melbourne on Shooty Skies. In their spare time they make every effort to work on games that further queer, trans and mental health representation. They’re currently working on a few games on bipolar, looking after yourself and other mental health themes. On top of this they are very outspoken about their mental health and take every opportunity to normalise speaking about it.</p>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180319142933/https:/www.linkedin.com/in/charlie-francis-cassidy-61259135/',
            twitter: 'https://web.archive.org/web/20180319142933/http:/twitter.com/charlietheGfish',
            facebook: 'https://web.archive.org/web/20180319142933/http:/www.facebook.com/charliethegfish',
            website: 'https://web.archive.org/web/20180319142933/http:/charliethegoldfish.com/',
            featured: [
                'linkedin',
                'twitter',
                'website',
            ],
        },
    },
    {
        name: 'Daniela Mattheys',
        slug: 'daniela-mattheys',
        location: 'perth',
        bio: (
            <Fragment>
                <p>A skilled industry specialist, strategist and thought leader with extensive experience in industry, business strategy and public policy development and a passion for innovation and the transformative nature of technology and the digital economy to deliver sustainable social and economic growth.</p>
                <p>Her extensive relevant corporate knowledge and high level advocacy skills deliver sustainable organisational outcomes and support her clients in meeting the challenges of a rapidly transforming business environment.</p>
                <p>Prior to starting edoCEO futures Daniela led the Industry and Innovation Division within the Western Australian State government. In this role she had strategic oversight of a broad spectrum of industry and economic development functions, including in the areas of Digital Economy, Innovation and Commercialisation, Marine and Defence, Oil and Gas Services and Local Industry Participation.</p>
                <p>Some of the key initiatives she has overseen include:</p>
                <ul>
                    <li>Delivery of the Government’s obligations to secure the AUD2.4bn international Square Kilometre Array Project in Western Australia.</li>
                    <li>Coordination of the State government obligations in response to the deployment of the AUD46bn National Broadband Network in WA.</li>
                    <li>Secured AUD350m investment by Trident Subsea Communications in the Pilbara region of WA.</li>
                    <li>Delivery of common-use and strategic infrastructure including the State Technology Precincts and the Australian Marine Complex.</li>
                    <li>AUD 45m Regional Mobile Communications Project.</li>
                    <li>Concept design and project implementation of the Powerhouse City project.</li>
                </ul>
                <p>Her extensive established network at senior level, across a wide range of industries, academia and at all levels of government is a sought after commodity, that provides access to decision makers and an insight into what is needed to succeed. She has significant experience in government relations through her roles on the WA Planning Commission Infrastructure Coordination Committee, the Asian Science Parks Association board and as a member of the Commonwealth States and Territories Advisory Committee on Innovation.</p>
                <p>Daniela champions diversity in industry through her position on the board of Women in Technology Western Australia (WiTWA).</p>
                <p>in addition she holds a range of executive committee and board positions, including with the WA IT and Telecommunications Alliance and NIT Australia.</p>
                <p>Before moving to Perth she held senior roles in the South African Foreign Trade Organisation, as well as in the private sector, is fluent in 3 languages and has a strong track record in international trade and investment facilitation in Africa and the Middle East.</p>
                <p>Daniela holds a Master’s degree in International Political Economics.</p>
            </Fragment>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180312183645/https:/au.linkedin.com/in/daniela-mattheys-6a848714',
            twitter: 'https://web.archive.org/web/20180312183645/https:/twitter.com/DMattheys',
        },
    },
    {
        name: 'Donna Edwards',
        slug: 'donna-edwards',
        location: 'perth',
        bio: (
            <Fragment>
                <p>Donna Edwards is the General Manager, Organisational Development at Ignia – an IT solutions provider with 86 employees across Australia. She is a passionate HR professional with 16 years’ experience in the IT industry focusing on recruitment, employee engagement, talent management and business growth.</p>
                <p>Donna has an MBA and MHRM and has played a pivotal role in the past 4 years in earning Ignia the #6 place in APAC’s BRW best places to work.</p>
                <p>Donna is passionate about helping women gain an equal foothold in the ICT industry especially in leadership roles. She has presented at a range of events including HR Connected, ACS Women and ACS Young IT events.</p>
                <p>She is a member of the philanthropy group <a href="www.100women.com.au" target="_blank" rel="nofollow">100women</a>, a committee member of HR Connected, an AHRI mentor, Curtin mentor and President of the Central Communicators Toastmasters club. In her spare time Donna sings and plays the electric violin and has performed in a range of bands and musical theatre.</p>
            </Fragment>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180312183638/https:/au.linkedin.com/in/edwardsdonna',
        },
    },
    {
        name: 'Elizabeth Wilson',
        slug: 'elizabeth-wilson',
        bio: (
            <Fragment>
                <p>Elizabeth is an innovative leader in utilising technology as a transformation agent for business change through the development and implementation of strategies, business and technology architectures and governance.</p>
                <p>In her current role as CIO at Edith Cowan University, Elizabeth has initiated a transformation program to uplift the University’s technology capability to support current and future teaching, learning and research needs. She is the WA representative to the AARNet Advisory Committee and is President of the Council of Australian Directors of IT (CAUDIT)</p>
            </Fragment>

        ),
        social: {
            linkedin: 'https:/au.linkedin.com/in/elizabeth-wilson-91479115',
        },
    },
    {
        name: 'Ella Ganfield',
        slug: 'ella-ganfield',
        location: 'perth',
        bio: (
            <p>Ella Ganfield launched her Perth based nanny agency, Gecko Steps, at the end of 2014, focusing on the three core values of supporting the children’s individual interests, positive wellbeing and educational development. Recognising educational development as a key area of importance, she then launched Geckos Discover, which is a technology program focused on teaching primary and high school students coding and programming skills. Through the school workshops, the program teaches project based learning to encourage the students to apply their knowledge to investigate how they can use technology to solve world issues. Ella’s passion for youth development has seen her serve as the 2013 World Vision Youth Ambassador for WA and act as the COO for Teach Learn Grow, a non for profit rural tutoring program.</p>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180312183358/https:/au.linkedin.com/in/ella-ganfield-648bb1b0',
            twitter: 'https://web.archive.org/web/20180312183358/https:/twitter.com/geckosteps',
            facebook: 'https://web.archive.org/web/20180312183358/https:/www.facebook.com/geckosteps/',
            website: 'https://web.archive.org/web/20180312183358/http:/www.geckosteps.com.au/',
            instagram: 'https://web.archive.org/web/20180312183358/https:/www.instagram.com/geckosteps/?hl=en',
            featured: [
                'linkedin',
                'twitter',
                'website',
            ],
        },
    },
    {
        name: 'Gry Stene',
        slug: 'gry-stene',
        location: 'perth',
        bio: (
            <Fragment>
                <p>With an enthusiasm to deliver positive outcomes, a love for technology innovation and a belief that entrepreneurship is the path of the future, Gry always looks for interesting opportunities where she can apply and share her experience as a “chick” in the software and other tech industries.</p>
                <p>After almost 30 years delivering solutions across industries, cultures and continents, Gry’s experience spans organisations with in-house, outsourced, offshore, virtual, and geographically separated teams, requiring a blend of intimate tactical and strategic engagement.</p>
                <p>She feels she has found her niche and thrives when streamlining organisations for successful product innovation and development in organisations that strive encourage social change.</p>
                <p>As co-founder and director of KinChip Systems, she is immersed in developing consumer facing technology and apps that help parents stay on top of their children’s health and development. At Telstra Health, Gry is driving the development of the Primary Care product, Communicare, that is used extensively to improve health outcomes in remote and rural Australia and in particular for indigenous communities.</p>
                <p>Gry’s experience spans organisations with in-house, outsourced, offshore, virtual, and geographically separated teams, requiring a blend of intimate tactical and strategic engagement.</p>
                <p>To complement her software background, Gry is a 2014 MBA graduate from UWA Business School, with focus on entrepreneurship & innovation, social impact, change & transformation, and leadership.</p>
                <p>Gry’s flexibility, enthusiasm, adaptability, knowledge, accountability, and drive for results, allows me to think outside the box to define and develop organisations and processes that adapt to change.</p>
                <p>Ever the willing mentor, Gry engages both at a personal and organisational level. She has been a mentor for WIMWA over several years, tutored at UWA, was part of the core team at Just Start IT, bringing entrepreneurship to high schools, is a member of Behind Closed Doors (a peer mentoring organisation) and is generally happy to sit down and have a yarn with anyone who needs a sounding board.</p>
            </Fragment>
        ),
        mentoring: (
            <p>I love to encourage and empower people to become the best they can be. I am in particular passionate about building up confidence in women and girls and I believe we need to bring the men and boys into the equation to do so…. Imagine if every young boy knew that his sister could do exactly what he can… and he would encourage her to be who she wants to be.</p>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180312183820/https:/au.linkedin.com/in/grystene',
            twitter: 'https://web.archive.org/web/20180312183820/https:/twitter.com/GrooveeFreo',
            facebook: 'https://web.archive.org/web/20180312183820/https:/www.facebook.com/gry.stene',
        },
    },
    {
        name: 'Hannah Dodds',
        slug: 'hannah-dodds',
        bio: (
            <Fragment>
                <p>A young teacher with a zest for using technology as a tool for learning. Outside of school, my time is spent connecting through Hangouts with educators, blogging to spread ideas and positivity toward using tech as a tool in the classroom and beyond! My passion is to inspire others and show how easy it is for diverse educators to utilise technology for learning.</p>
                <p>I love to blog ideas for educators and document challenges and solutions that have occurred on my journey.</p>
            </Fragment>
        ),
        social: {
            twitter: 'http:/twitter.com/misshdodds',
            blog: 'http:/www.misshdodds.weebly.com/',
        },
    },
    {
        name: 'Jenine Beekhuyzen',
        slug: 'jenine-beekhuyzen',
        location: 'brisbane',
        bio: (
            <Fragment>
                <p>Dr Jenine Beekhuyzen is a Diversity Expert. She is one of Advance Queensland’s Digital Champions, was named by the Sydney Morning Herald as a female rising star in ICT, and is the winner of the 2014 Australian Information Industries Association (AIIA) iAward for Queensland ICT Woman of the Year.</p>
                <p>Dr. Jenine Beekhuyzen is a social entrepreneur and academic, and an advocate for increasing the number of women in STEM. She is the Founder & CEO of the non-profit Tech Girls Movement (TGM), and runs her own research consulting company Adroit Research with her expertise in qualitative research. Dr. Beekhuyzen completed her Doctorate in Australia on unauthorised file sharing in 2010, and she has turned her research on gender into practice by producing the illustrative children’s books Tech Girls Are Superheroes (1 & 2) and Tech Girls are Chic! – free books which have received widespread success with 55 000 copies distributed to school girls across Australia.</p>
                <p>Her advocacy for girls and women in STEM is based on more than a decade of internationally peer-reviewed research; she has more than 60 published peer reviewed papers. Dr. Beekhuyzen is also the Queensland Authorised Trainer for QSR’s NVivo software with more than 15 years of research experience.</p>
            </Fragment>
        ),
        mentoring: (
            <p>I am the Founder of the Tech Girls are Superheroes Program. I actively seek out women in tech to become mentors and superheroes in my program which encourages girls into careers in Tech.</p>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180319143008/https:/au.linkedin.com/in/jeninebeek',
            twitter: 'https://web.archive.org/web/20180319143008/https:/twitter.com/TGAsuperheroes',
            website: 'https://web.archive.org/web/20180319143008/http:/www.techgirlsmovement.org/',
            facebook: 'https://web.archive.org/web/20180319143008/https:/www.facebook.com/Techgirlsaresuperheroes/?fref=ts',
            instagram: 'https://web.archive.org/web/20180319143008/https:/www.instagram.com/techgirlsaresuperheroes/?hl=en',
            youtube: 'https://web.archive.org/web/20180319143008/https:/www.youtube.com/channel/UCADr4fgqH9KnF3_iXBUKUkQ',
            featured: [
                'linkedin',
                'twitter',
                'website',
            ],
        },
    },
    {
        name: 'Jo Saunders',
        slug: 'jo-saunders',
        tagline: 'LinkedIn Demystifier',
        location: 'perth',
        bio: (
            <Fragment>
                <p>Jo has been helping individuals connect and communicate since the early 90s, through pen and paper, events and now social media. She is an educator, strategist and ideas person, who thrives on inspiring people to identify their values, vision and voice. She is a LinkedIn expert and is often called the ‘LinkedIn Demystifier’ who helps professionals market themselves, communicate their brand message and showcase their talent.</p>
                <p>Jo has collaborated on global social media projects with other social media and LinkedIn specialists around the world.</p>
                <blockquote>Be unique not a sheep</blockquote>
            </Fragment>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180312183729/https:/au.linkedin.com/in/josaunders',
            twitter: 'https://web.archive.org/web/20180312183729/http:/twitter.com/joatwildfire',
            facebook: 'https://web.archive.org/web/20180312183729/http:/facebook.com/wildfiresocialmarketing',
            website: 'https://web.archive.org/web/20180312183729/http:/jo-saunders.com/',
            instagram: 'https://web.archive.org/web/20180312183729/http:/instagram.com/wildfiresm',
            website: 'https://web.archive.org/web/20180312183729/http:/www.wildfiresocialmarketing.com/',
            featured: [
                'linkedin',
                'twitter',
                'website',
            ],
        },
    },
    {
        name: 'Joshua Meadows',
        slug: 'joshua-meadows',
        location: 'melbourne',
        bio: (
            <p>Joshua Meadows is a writer, photographer, and video game developer originally from New York City but now living in Sydney, Australia. Some of his writing work has been featured on websites like Kotaku, GayGamer.net, and XY Magazine. His sci-fi/fantasy novella series, Iyetra, was a quarterfinalist in the 2012 “Amazon Breakthrough Novel Award” competition sponsored by Penguin Books.</p>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180319142732/https:/au.linkedin.com/in/joshua-meadows-5b1533a2',
            facebook: 'https://web.archive.org/web/20180319142732/https:/www.facebook.com/joshua.meadows',
            twitter: 'https://web.archive.org/web/20180319142732/https:/twitter.com/joshuameadows',
            website: 'https://web.archive.org/web/20180319142732/http:/www.joshuameadows.com/',
            featured: [
                'linkedin',
                'twitter',
                'website',
            ],
        },
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
        name: 'Kathy Bunce',
        slug: 'kathy-bunce',
        location: 'perth',
        bio: (
            <Fragment>
                <p>Kathy is a resources industry veteran. Before joining Unearthed, she was General Manager People, Innovation & Information at Iluka Resources, a leading international mineral sands mining company.</p>
                <p>While at Iluka, Kathy was involved with developing a culture and practices to build capability and capacity, drive safe and proactive production, diversity and innovation to ultimately deliver Iluka’s strategy.</p>
                <p>Her role was to find ways for people and technology to improve, grow and transform Iluka, the mineral sands industry and the resource sector. She is passionate about developing people to achieve their full potential.</p>
            </Fragment>
        ),
        mentoring: (
            <Fragment>
                <p>Kathy is also a passionate supporter of creating opportunity for young people, and has brought a youth coding hackathon – We Connect The Dots (WCTD) to Australia.</p>
                <p>The WCTD program supports digital literacy amongst high school students and drives the importance of science, technology, engineering, arts and math to match the demands of industry.</p>
            </Fragment>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180312183905/https:/www.linkedin.com/in/kathy-bunce-473694a/',
        },
    },
    {
        name: 'Lain Mitterer',
        slug: 'lain-mitterer',
        location: 'melbourne',
        bio: (
            <p>Lain is a non-binary person who makes games about gender identity and mental illness.</p>
        ),
        social: {
            twitter: 'https://web.archive.org/web/20180319142911/https:/twitter.com/exp_lain',
            instagram: 'https://web.archive.org/web/20180319142911/https:/www.instagram.com/experimental.lain/',
            facebook: 'https://web.archive.org/web/20180319142911/https:/www.facebook.com/profile.php?id=100009299777799',
            linkedin: 'https://web.archive.org/web/20180319142911/https:/www.linkedin.com/in/lain-mitterer-b4612a12a',
            featured: [
                'twitter',
                'facebook',
                'linkedin',
            ],
        },
    },
    {
        name: 'Laura Boykin',
        slug: 'laura-boykin',
        location: 'perth',
        bio: (
            <p>I’m currently working to help smallholder farmers in sub-Saharan Africa to control whiteflies, which are devastating cassava, leaving many smallholder famers food insecure. Our team is using genomics and high performance computing to tackle the whitefly/cassava/food security issue.</p>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180312183438/https:/au.linkedin.com/in/laura-boykin-b437954b',
            twitter: 'https://web.archive.org/web/20180312183438/https:/twitter.com/laura_boykin',
            youtube: 'https://web.archive.org/web/20180312183438/https:/youtu.be/YqcX2GcUY-o',
            website: 'https://web.archive.org/web/20180312183438/http:/www.lauraboykinresearch.com/',
            blog: 'https://web.archive.org/web/20180312183438/http:/www.lauraboykinresearch.com/news.html',
            featured: [
                'linkedin',
                'twitter',
                'website',
            ],
        },
    },
    {
        name: 'Leonie Yue',
        slug: 'leonie-yue',
        location: 'melbourne',
        bio: (
            <p>Quiet Character Designer, Illustrator & Concept/Games Artist</p>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180319142740/https:/www.linkedin.com/in/leonieyue',
            twitter: 'https://web.archive.org/web/20180319142740/https:/twitter.com/leonieyue',
            website: 'https://web.archive.org/web/20180319142740/http:/www.leonieyue.com/',
            instagram: 'https://web.archive.org/web/20180319142740/https:/www.instagram.com/leonieyueart/',
            youtube: 'https://web.archive.org/web/20180319142740/https:/www.youtube.com/user/jooinfin',
            blog: 'https://web.archive.org/web/20180319142740/http:/blog.leonieyue.com/',
            featured: [
                'linkedin',
                'website',
                'blog',
            ],
        },
    },
    {
        name: 'Liam Esler',
        slug: 'liam-esler',
        location: 'melbourne',
        bio: (
            <p>Liam Esler is a diversity advocate, game developer and event manager from Melbourne, Australia. He works with the Game Developers’ Association of Australia to manage Game Connect Asia Pacific, Australia’s premiere game development conference and is Co-Director of GX Australia, the first queer gaming convention to hit Australian shores. He’s involved with several other organisations including acting as Co-Director of the IGDA LBGTQI+ Special Interest Group, and member of the Games and Interactive Advisory Committee for the Australian Writers’ Guild. When he is not running events or encouraging the industry to become more diverse, he is a freelance games producer and writer who has worked at companies such as Beamdog, Obsidian Entertainment, Surprise Attack and Australian gaming news outlet and TV show Player Attack. In 2016 he was honoured to be named as one of MCV Pacific’s 30 Under 30 in Asia Pacific, as well as one of Develop’s 30 Under 30 worldwide.</p>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180319142556/https:/www.linkedin.com/in/liamesler',
            twitter: 'https://web.archive.org/web/20180319142556/http:/twitter.com/liamesler',
            facebook: 'https://web.archive.org/web/20180319142556/https:/www.facebook.com/liam.esler.7',
            instagram: 'https://web.archive.org/web/20180319142556/http:/instagram.com/liamesler/',
            featured: [
                'linkedin',
                'twitter',
                'facebook',
            ],
        },
    },
    {
        name: 'Maggie Hardy',
        slug: 'maggie-hardy',
        location: 'brisbane',
        bio: (
            <p>An internationally recognized leader in her field, Dr Maggie Hardy is an expert known for her contributions to chemistry and evidence-based policy. She is a Fellow of the Royal Entomological Society, and serves on the Executive Board for the International Branch of the Entomological Society of America, is a Director for the Tech Girls Movement Foundation, and is a member of the Executive Advisory Board of Bravehearts. Her research program is focused on the discovery, characterization, and commercialization of novel chemistries from the venom of Australian spiders. Her research is applied across a number of sectors, including drug discovery and delivery, public health, agriculture, biosecurity, export, and agribusiness. Dr Hardy is an advocate for equity and diversity in higher education and careers in research, and has a particular interest in open access discovery programs. Dr Hardy also provides digital communication training for research scientists and clinicians, and is particularly interested in altmetrics and novel ways to measure engagement. In addition to her research Dr Hardy is a wife and mother.</p>
        ),
        mentoring: (
            <p>I am a Mentor and Role Model in the Tech Girls are SuperheroesProgram. I actively encourage young women and girls to pursue careers in tech and STEM.</p>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180319143210/https:/au.linkedin.com/in/drmaggiehardy',
            twitter: 'https://web.archive.org/web/20180319143210/https:/twitter.com/DrMaggieHardy',
            website: 'https://web.archive.org/web/20180319143210/https:/muckrack.com/drmaggiehardy/portfolio',
        },
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
        name: 'Mathilde Desselle',
        slug: 'mathilde-desselle',
        location: 'brisbane',
        bio: (
            <Fragment>
                <p>Mathilde Desselle is a program coordinator for outreach for the award-winning Community for Open Antimicrobial Drug Discovery, a global initiative of The University of Queensland’s Institute for Molecular Bioscience. She is leading the marketing and outreach strategy and team in accessing compounds collections from all over the world and setting up international partnerships.</p>
                <p>She has over 8 years’ management experience driving engagement strategies for life sciences research programs and facilities in Europe and Australia, and the ambition to make a difference in the space of public health.</p>
                <p>She is passionate with finding innovative approaches to drive transformational change and solutions to diagnose, track and treat infectious diseases.</p>
                <p>She is also a science communicator and a board director for Women in Technology, the peak body association for women in science and ICT careers in Queensland, and for the Tech Girls Movement, promoting positive role models to encourage and raise awareness of STEM careers for girls.</p>
            </Fragment>
        ),
        mentoring: (
            <p>I am a Mentor and Role Model in the Tech Girls are Superheroes Program. I actively encourage young women and girls to pursue careers in tech and STEM.</p>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180319143254/https:/au.linkedin.com/in/mathildedesselle/en',
            twitter: 'https://web.archive.org/web/20180319143254/https:/twitter.com/mathildesselle',
        },
    },
    {
        name: 'Megan Pusey',
        slug: 'megan-pusey',
        tagline: 'Science Ninja Gal',
        location: 'perth',
        bio: (
            <p>An educator, science communicator and video game enthusiast. Megan Pusey has worked in science museums and children’s museums communicating complex ideas through exhibits, hands-on activities, magazine articles and live action science shows.  Megan is a big proponent of digital game-based learning (in other words using video games in the classroom). So far she has managed to sneak Portal 2, Universe Sandbox, Minecraft Edu, Osmos and Contraption Maker into her science lessons.  Megan is also passionate about the use of any technology in the classroom and making learning more relevant for the 21st century.</p>
        ),
        social: {
            twitter: 'https://web.archive.org/web/20180312183508/https:/twitter.com/scienceninjagal',
            website: 'https://web.archive.org/web/20180312183508/https:/scienceninjagal.wordpress.com/',
        },
    },
    {
        name: 'Dr Michelle Ellis',
        slug: 'michelle-ellis',
        location: 'perth',
        bio: (
            <Fragment>
                <p>Dr Michelle Ellis is currently researching the understanding of, and aspirations for Higher Education in the Computer and Security Sciences by female students in year 9 and 10. In conjunction with Professor Trish Williams, the research has identified that these girls had limited knowledge about the Computer and Security Sciences and with more information would consider a career in these fields.</p>
                <p>I am looking at establishing the Girls Programming Network at Edith Cowan University. This will be supported by the National Computer Science Society. Each term, year 7 to 12 girls will be invited to attend a one day workshop on different aspects of computer science and security science.</p>
            </Fragment>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180312183411/https:/www.linkedin.com/in/dr-michelle-ellis-4bb72493',
            twitter: 'https://web.archive.org/web/20180312183411/https:/twitter.com/mssgellis',
        },
    },
    {
        name: 'Michelle Sandford',
        slug: 'michelle-sandford',
        location: 'perth',
        bio: (
            <p>Tedx Speaker, Tech Girl Superhero, Microsoftie and 1 of MCV’s 100 Most Influential Women in Games 2016 – Michelle Sandford is a popular choice for speaking on diversity in Tech, women and young people into the Tech Industry, and the benefits of Games – all delivered with an inspirational and motivational flair. Michelle is the Vice Chair of the Australian Computer Society in WA, and one of their Executive Board Members. Michelle is also a member of the WAITTA Organising Committee. Her Tech Industry experience includes working for IBM Global Business Services and Microsoft.  Michelle lives life by running to stay one jump ahead of the Gameboy and by striving to think outside the Xbox. She surfs waves and webs. Michelle is the Founder and Global President of TechOutsiders.</p>
        ),
        mentoring: (
            <p>I am a Mentor and Role Model in the <a href="https://web.archive.org/web/20180312183147/http:/www.techgirlsaresuperheroes.org/" target="_blank" rel="nofollow">Tech Girls are Superheroes</a> Program. I actively encourage young women and girls to pursue careers in tech and STEM.</p>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180312183147/https:/au.linkedin.com/in/michellesandford',
            twitter: 'https://web.archive.org/web/20180312183147/https:/twitter.com/msandfor',
            facebook: 'https://web.archive.org/web/20180312183147/https:/www.facebook.com/michellesandfordSpeaker/',
            instagram: 'https://web.archive.org/web/20180312183147/https:/www.instagram.com/msandfor/',
            youtube: 'https://web.archive.org/web/20180312183147/https:/www.youtube.com/user/msandfor',
            website: 'https://web.archive.org/web/20180312183147/http:/michellesandford.com/',
            featured: [
                'linkedin',
                'twitter',
                'website',
            ],
        },
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
            instagram: 'https://web.archive.org/web/20180312183253/http:/instagram.com/mingjohanson',
            website: 'https://mingjohanson.com.au/',
            youtube: 'https://web.archive.org/web/20180312183253/https:/www.youtube.com/user/MingSocialNerd',
            featured: [
                'twitter',
                'linkedin',
                'facebook'
            ]
        },
    },
    {
        name: 'Nicole Stark',
        slug: 'nicole-stark',
        location: 'brisbane',
        bio: (
            <Fragment>
                <p>Nicole Stark is the proud owner of the inaugural ANZ Women in Games Award for Creative Inspiration. She’s held senior positions on a variety of shipped game titles with project sizes ranging from triple A console to indie mobile. She’s had her surfing animations praised by an Australian champion surfer and her Barbie costume designs praised by Mattel.</p>
                <p> In 2012 Nicole formed Disparity Games with her husband and four daughters. Based in the heart of paradise, Noosa, they make serious games with silly names.</p> 
            </Fragment>
        ),
        mentoring: (
            <p>I mentor for CoderDojo, Tech Girls are Superheroes, Robogals, Digital Diva’s or a similar org</p>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180319143304/https:/www.linkedin.com/in/nicole-stark-61692720',
            twitter: 'https://web.archive.org/web/20180319143304/https:/twitter.com/ColeStark',
            facebook: 'https://web.archive.org/web/20180319143304/https:/www.facebook.com/disparitygames',
            website: 'https://web.archive.org/web/20180319143304/http:/www.disparitygames.com/',
            featured: [
                'linkedin',
                'twitter',
                'website',
            ],
        },
    },
    {
        name: 'Pia Turcinov',
        slug: 'pia-turcinov',
        location: 'perth',
        bio: (
            <Fragment>
                <p>As an experienced business and innovation manager, as well as qualified Australian legal practitioner, Pia offers a deep understanding of the processes involved in successful strategic collaborations and embedding innovation processes into organisations. Leveraging a wealth of practical business knowledge gained over 25 years in the private, public and not for profit sectors in Western Australia and New South Wales, Pia is an accomplished commercial advisor, facilitator and innovation broker. She is passionate about sharing her expertise as a consultant, mentor and public speaker on topics relating to innovation, commercialisation, collaboration and capacity building across and within enterprises.</p>
                <p>As a mother of three daughters, Pia is also an advocate of supporting and enabling female entrepreneurs and business owners. In addition to currently delivering advisory and facilitation support services to SMEs under the Federal Government’s Entrepreneurs’ Programme, Pia holds a number of non-executive and voluntary positions, including as Secretary and Committee member of Women in Technology WA; Chair of the WiTWA Techtrails STEM School Incursion Program; WA Sub-Committee member of Springboard Enterprises Australia Accelerator Program; Committee member of Regional Development Australia Perth; and as Non-executive Director of the Australian Energy and Resources Growth Centre.</p>
            </Fragment>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180319143736/https:/au.linkedin.com/in/piaturcinov',
            twitter: 'https://web.archive.org/web/20180319143736/https:/twitter.com/Pia_Turcinov'
        },
    },
    {
        name: 'Rebecca Platt',
        slug: 'rebecca-platt',
        location: 'perth',
        bio: (
            <p>Rebecca is a Developer who works at Bankwest and mentors for CoderDojo</p>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180312183559/https:/au.linkedin.com/in/rebecca-platt-a886aba7',
        },
    },
    {
        name: 'Rhonda Craig',
        slug: 'rhonda-craig',
        tagline: '',
        bio: (
            <p>Microsoftie, geeky chick, customer advocate, foodie, social promoter, passionate marketer and old fashioned sales person.</p>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180312183339/https:/au.linkedin.com/in/rhondacraig',
            twitter: 'https://web.archive.org/web/20180312183339/https:/twitter.com/rhondajcraig',
        },
    },
    {
        name: 'Sally-Anne Kellaway',
        slug: 'sally-anne-kellaway',
        location: 'melbourne',
        bio: (
            <p>Sally-anne Kellaway is the Senior Audio Designer for Zero Latency, a Melbourne-based VR developer that hosts free-roam room scale VR games for 6+ players, with additional sites opening in Japan and in unannounced locations worldwide.  She also works closely with the Industry-standard Audio Middleware solution FMOD, is the Sound Supervisor for the 360 Uku VR Documentary series, and is a seasoned speaker at major Game Development conferences worldwide.   Sally is also the co-chair of the IGDA Special Interest Group for Virtual, Augmented and Mixed Realities, and speaks at conferences worldwide about the role of Audio in Virtual Reality.  Sally has worked for SEGA Studios Australia and has completed a Masters in Design Science with a specialisation in Audio and Acoustics, marrying industry and academic knowledge of Psychoacoustics to bring premium immersive audio technology to VR.</p>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180319142636/https:/au.linkedin.com/in/sally-anne-kellaway-32705010',
            twitter: 'https://web.archive.org/web/20180319142636/https:/twitter.com/soundsbysal',
            facebook: 'https://web.archive.org/web/20180319142636/http:/facebook.com/soundsbysal/',
            website: 'https://web.archive.org/web/20180319142636/http:/soundsbysal.weebly.com/',
            featured: [
                'linkedin',
                'twitter',
                'website',
            ],
        },
    },
    {
        name: 'Samantha Hall',
        slug: 'samantha-hall',
        location: 'perth',
        bio: (
            <Fragment>
                <p>After working in business development and marketing in Perth whilst completing my Commerce degree in 2001, I was awarded 1 of 5 global internships through the International Advertising Association to New York, where I worked at BBDO. I took some time off after this travelling through the US, Canada, Europe and Central America and then moved to London. I worked here  in marketing for Reed Exhibitions, managing major accounts, and eventually transitioned back to  Sydney with Reed.</p>
                <p>I returned to Perth and worked for an engineering company managing marketing, and moved to Thailand when their head office relocated. I took over HR management for Thailand, Singapore  and Indonesia.</p>
                <p>I’ve always been an entrepreneur at heart, it was in Thailand I could see the impacts of climate  change and felt compelled to make a difference. I went through a career shift, returning to  university to complete a Masters of Science (2010) and PhD (2014), through which I developed an  industry tool targeting commercial building performance improvements.</p>
                <p>Through the PhD I discovered the linear nature of the construction industry. Buildings were  designed and delivered with limited feedback loops. In addition whilst assessing buildings during  my PhD I saw some terrible spaces that are not designed or maintained with consideration to  human needs. I believe there is so much potential to create healthier, more vibrant spaces.</p>
                <p>Passionate about linking academic research and practice, I co-founded consultancy SimplyCarbon  in 2011 and recently Rate My Space. I am joining 77 other women from around the world in 2016 on a leadership bootcamp in Antarctica aimed at closing the leadership gap for women in STEM.</p>
            </Fragment>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180312183839/https:/www.linkedin.com/in/samhall09/',
            twitter: 'https://web.archive.org/web/20180312183839/https:/twitter.com/_SamanthaHall',
            website: 'https://web.archive.org/web/20180312183839/http:/www.ratemyspace.com.au/',
            instagram: 'https://web.archive.org/web/20180312183839/http:/instagram.com/ratemyspace',
            featured: [
                'linkedin',
                'twitter',
                'website',
            ],
        },
    },
    {
        name: 'Sara Henshall',
        slug: 'sara-henshall',
        location: 'perth',
        bio: (
            <p>Accomplished IT Professional with over 20 years’ industry experience and 12 years’ extensive experience managing and improving IT systems, projects, processes and services.</p>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180312183657/https:/au.linkedin.com/in/sarahenshall',
        },
    },
    {
        name: 'Sarah Mitchell',
        slug: 'sarah-mitchell',
        bio: (
            <Fragment>
                <p>Sarah Mitchell is the Director of Content Strategy at Lush Digital Media. She develops and implements content marketing strategies for organisations all over the world. She’s fascinated with the idea of creating content that converts into long-term business assets.</p>
                <p>Sarah is the Chief Editor of Traction News, the Australian editor of Chief Content Officer Magazine and a regular contributor to the Content Marketing Institute. Her writing has been published in five countries and received numerous awards, including the #1 spot on 20 of the Best Australian Business Blogs (January 2014) at SmartCompany. She’s the chief editor and contributor of the Lush Digital Media blog, named one of Australia’s 20 Best Business Blogs: 2015 by SmartCompany. Search Engine Journal named Sarah’s Global Copywriting blog one of the best marketing blogs in Australia (May 2014). Brand Newsroom, the podcast she co-hosts with James Lush and Nic Hayes, was shortlisted as a finalist for Best Podcast in the 2015 Content Marketing Awards in the USA.</p>
                <p>Sarah’s career started in technology where she spent 15 years in software development moving through the ranks from operations, programming, systems analysis, testing, and project management. She then spent five years working in commission-based sales roles. She exceeded her quota every year, which led to her running large accounts and managing a sales team of 13 people. This experience, more than any other, informed her attitude towards the importance of results-based marketing activities.</p>
                <p>Something of a professional vagabond, Sarah has lived and worked in corporate environments on five continents. The best place to track her down is on Twitter at @globalcopywrite. You can listen to her Brand Newsroom podcast on iTunes, or look her up on LinkedIn.</p>
            </Fragment>
        ),
        social: {
            linkedin: 'https:/au.linkedin.com/in/sarahcmitchell',
            twitter: 'https:/twitter.com/globalcopywrite',
            facebook: 'https:/www.facebook.com/GlobalCopywriting/',
            website: 'http:/www.globalcopywriting.com/#sthash.plCL3IYT.dpbs',
            featured: [
                'linkedin',
                'twitter',
                'website',
            ],
        },
    },
    {
        name: 'Siobhan Avenell',
        slug: 'siobhan-avenell',
        location: 'perth',
        bio: (
            <p>Currently an Organisational Development Advisor with Ignia</p>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180312183547/https:/au.linkedin.com/in/siobhan-avenell-0095852b',
        },
    },
    {
        name: 'Sonia Cuff',
        slug: 'sonia-cuff',
        location: 'brisbane',
        bio: (
            <Fragment>
                <p>Joining the IT industry straight out of high school, Sonia grew up doing Microsoft-focused Enterprise systems administration, support and architecture for large organisations & government. Moving into the SMB market in 2004, she brought Enterprise best practices to small businesses. Sonia is a a self-confessed Cloud ‘realist’ who is passionate about the right use of the right technology to achieve great business results.</p>
                <p>Sonia has her own blog which doesn’t receive as much love as her other writing commitments. She’s a guest contributor at 24×7 IT Connection, a regular ambassador in Thwack the Solarwinds community and a guest writer for Tech Target. Sonia is often called upon for expert comment.</p>
                <p>She’s spoken at Microsoft Ignite and Interop and is also a Pluralsight author.</p>
                <p>And in her spare time, she tweets and runs a technical Facebook group.</p>
                <blockquote>It’s not the technology that counts, it’s what you do with it.</blockquote>
            </Fragment>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180319143437/https:/au.linkedin.com/in/soniacuff',
            twitter: 'https://web.archive.org/web/20180319143437/https:/twitter.com/Cuff_S',
            instagram: 'https://web.archive.org/web/20180319143437/https:/www.instagram.com/cuff_s/?hl=en',
            website: 'https://web.archive.org/web/20180319143437/http:/www.soniacuff.com/',
            featured: [
                'linkedin',
                'twitter',
                'website',
            ],
        },
    },
    {
        name: 'Creatrix Tiara',
        slug: 'creatrix-tiara',
        location: 'melbourne',
        bio: (
            <p>Creatrix Tiara has a philosophy of signing up for anything that looks interesting. This has led to multiple successful creative and online projects, including a White House LGBTIQ in Tech Fellowship, an invite to Al-Jazeera’s Media in Context Hackathon, leading blogs on alternative education and MH370, an international politically-sharp burlesque & performance arts career, and even virality through poking holes at Ello’s privacy problems.</p>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180319142600/http:/linkedin.com/in/tiaras',
            twitter: 'https://web.archive.org/web/20180319142600/https:/twitter.com/creatrixtiara',
            website: 'https://web.archive.org/web/20180319142600/http:/creatrixtiara.com/',
            website2: 'https://web.archive.org/web/20180319142600/https:/creatrixtiara.contently.com/',
            featured: [
                'linkedin',
                'twitter',
                'website',
            ],
        },
    },
    {
        name: 'Tracey Joynson',
        slug: 'tracey-joynson',
        location: 'perth',
        social: {
            linkedin: 'https://web.archive.org/web/20180312183714/https:/au.linkedin.com/in/tracey-joynson-b5930826',
        },
    },
    {
        name: 'Vee Pendergrast',
        slug: 'vee-prendergrast',
        location: 'perth',
        bio: (
            <Fragment>
                <p>After ties to the WA videogame industry since the mid-2000s, Vee Pendergrast co-founded Stirfire Studios in 2010. Vee has commerce degree and over 13 years experience in technology go-to-market from the mobile telecommunications sector having worked in and around every major telco in Australia, a mobile phone manufacturer and as a state manager for a telecom logistics company.</p>
                <p>Vee’s passion in life has always been games and has loved games as medium since the age of four, so a career in games was always going to happen at some point. Vee has had experience designing tabletop games but works more in a support role as Managing Director for Stirfire. Vee’s philosophy is that the videogame is the medium of delivery and the game mechanics, story and content is the point of the exercise- the technology is just the facilitator.</p>
                <p>Vee is currently involved in major capital raising to grow Stirfire Studios and tackle larger projects as well as the final stages of bringing their current title in production, Symphony of the Machine to market.</p>
            </Fragment>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180319142539/http:/linkedin.com/in/garth-vee%E2%80%8B-pendergrast-b9458146',
            twitter: 'https://web.archive.org/web/20180319142539/https:/twitter.com/V_garpend',
            facebook: 'https://web.archive.org/web/20180319142539/https:/www.facebook.com/StirfireStudios/?fref=ts',
            website: 'https://web.archive.org/web/20180319142539/https:/stirfire.net/',
            featured: [
                'linkedin',
                'twitter',
                'website',
            ],
        },
    },
    {
        name: 'Dr Vivienne Conway',
        slug: 'vivienne-conway',
        location: 'perth',
        bio: (
            <Fragment>
                <p>Dr Vivienne Conway is the Director of Web Key IT Pty Ltd.</p>
                <p>Vivienne completed her PhD in IT (website accessibility) at Edith Cowan University and is a Certified Professional (Snr) member of the Australian Computer Society.  Vivienne received the ACS “Australian Computer Society Prize” in 2009 for the graduating student with the highest Weighted Average Mark in an ACS accredited undergraduate course.  She was also the winner of a Google Student Award which allowed her to attend the WWW 2011 Conference in Hyderabad, India and the Twila Ann Janssen Herr Research Award for Disability Services from the Australian Library and Information Association.</p>
                <p>Web Key IT is one of only ten Australian members of the World Wide Consortium (W3C).  Vivienne is active in the WCAG Working Group, Research & Development Working Group, Education & Outreach Working Group and the WCAG Evaluation Methodology Task Force.</p>
                <p>Vivienne is also active in a number of conferences here in Australia and overseas.  In particular, she is involved with the Web 4 All international conference which is co-located with the WWW Conference, to be held in 2017 in Perth, WA.  This year, Vivienne is General Chair for that conference.</p>
                <p>This year there has been a massive rise in awareness across the globe on the topics of accessibility and digital inclusion. Organisations are starting to realise that they cannot afford to exclude a large part of their market because they are unable to access their technology solution. Dr Vivienne Conway is at the forefront of the change that is coming – she is showing industry and government the way, helping, advising, directing and changing them. She has carried a storm of digital disruption in her hands and it will wash away the complacency that came before. #BeWhatsNext</p>
            </Fragment>
        ),
        social: {
            linkedin: 'https://web.archive.org/web/20180312183852/https:/www.linkedin.com/in/vivienne-conway-92756a30/',
            twitter: 'https://web.archive.org/web/20180312183852/https:/twitter.com/webkey_it',
            facebook: 'https://web.archive.org/web/20180312183852/https:/www.facebook.com/webkeyit',
            website: 'https://web.archive.org/web/20180312183852/http:/www.webkeyit.com/',
            featured: [
                'linkedin',
                'twitter',
                'website',
            ],
        },
    },
];

export default speakers;