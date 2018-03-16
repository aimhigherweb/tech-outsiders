import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0);

			if (
				document.getElementsByClassName('main menu active').length > 0
			) {
				document.getElementById('nav-main').classList.remove('active');
			}
		}
	}

	render() {
		return this.props.children;
	}
}

export default withRouter(ScrollToTop);
