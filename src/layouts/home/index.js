import React, { Component, Fragment } from 'react';

//Components
import {Meta} from '../../components/parts/index.js';

//Resources
// import './style.scss';

const meta = {
	name: 'AimHigher Web Design',
	description: 'AimHigher Web Design bridges the gap between technology and business throughout Australia.',
	slug: '',
};

class Home extends Component {
	render() {
		return (
			<Fragment>
                <Meta {...meta} />
                <h1>This is the React Starter Kit</h1>
            </Fragment>
		);
	}
}

export default Home;