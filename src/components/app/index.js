import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Home from '../../layouts/home/index.js';
import About from '../../layouts/about/index.js';
import SpeakerProfile from '../../layouts/speaker/index.js';

//Resources
import './style.scss';

export const menuItems = [
  {
		slug: '/',
		title: 'Home',
		component: Home,
  },
  {
    slug: '/:speaker',
    title: 'Speaker Profile',
    component: SpeakerProfile,
    hideNav: true
  }
];

export const legalItems = [
  {
    slug: '/about',
    title: 'About',
    component: About
  }
];

const routeItems = menuItems.concat(legalItems);

class App extends Component {
  render() {
    let subPages = [],
        pages = routeItems.map((page) => {

          if(page.subPages) {
            let subp = page.subPages;
            let thisSubPages = subp.map((subpage) => {
              return (
                <Route path={page.slug + subpage.slug} exact component={subpage.component} key={subpage.slug} />
              );
            });

            const sp = subPages;

            subPages = sp.concat(thisSubPages);

            return (
                <Route key={page.slug} path={page.slug} exact component={page.component} />
            );
          }
          else if (page.component) {
            return (
              <Route path={page.slug} exact component={page.component} key={page.slug} />
            );
          }
    });
    
    return (        
      <Switch>
          {pages}
          {subPages}
      </Switch>
    );
  }
};

export default App;