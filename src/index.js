import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//Import components
import { Header } from './js/partial/header.js';
import { App } from './js/partial/app.js';
import { Footer } from './js/partial/footer.js';
import ScrollToTop from './js/partial/scrollToTop.js';

//Resources
import './scss/global.scss';

class Main extends React.Component {
	render() {
		return (
			<Router>
				<ScrollToTop>
					<header id="header">{<Header />}</header>
					<div id="main">{<App />}</div>
					<footer id="footer">{<Footer />}</footer>
				</ScrollToTop>
			</Router>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));
