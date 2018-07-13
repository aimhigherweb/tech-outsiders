import React, { Component, Fragment } from 'react';

//Components
import {Meta} from '../../components/parts/index.js';

//Resources
import './style.scss';
  
const meta = {
	name: 'Tech Outsiders',
	description: 'It is our mission to solve that problem by highlighting all of the marvellous talent the Tech Industry has outside of the default.',
	slug: '',
};

class About extends Component {
	render() {
		return (
			<Fragment>
				<Meta {...meta} />
                <h1>About Tech Outsiders</h1>
				<p>Tech Outsiders is a social enterprise based in WA that is raising awareness of all the cool people we have working in tech who are outside the industry stereotype of the "straight white male".</p>
				<p>The most common response we hear to the complaint "All the speakers at the conference are men!" or "All the award nominees are male" is that there were "No known female candidates".</p>
				<blockquote>It is our mission to solve that problem by highlighting all of the marvellous talent the tech industry has outside the default</blockquote>
            </Fragment>
		);
	}
};

export default About;