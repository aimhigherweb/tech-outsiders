import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Waypoint from 'react-waypoint';

//Components
import Header from './components/header/index.js';
import App from './components/app/index.js';
import Footer from './components/footer/index.js';

//Resources
import './global.scss';

class Root extends React.Component {
	scrolling() {
		document.getElementById('root').classList.add('scrolled');
	}

	render() {
		if(location.pathname != '/') {
			document.getElementById('root').classList.add('profile');
		}

		return (
			<Router basename="/">
					<Fragment>
						<header>{<Header />}</header>
						<Waypoint onLeave={this.scrolling} />
						<main>{<App />}</main>
						<footer>{<Footer />}</footer>
					</Fragment>
			</Router>
		);
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));