import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//Components
import Header from './components/header/index.js';
import App from './components/app/index.js';
import Footer from './components/footer/index.js';

//Resources
import './global.scss';

class Root extends React.Component {
	render() {
		return (
			<Router basename="/">
					<Fragment>
						<header>{<Header />}</header>
						<main>{<App />}</main>
						<footer>{<Footer />}</footer>
					</Fragment>
			</Router>
		);
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));