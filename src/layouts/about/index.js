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
                <h1>About Tech Outsiders</h1>
            </Fragment>
		);
	}
};

export default About;