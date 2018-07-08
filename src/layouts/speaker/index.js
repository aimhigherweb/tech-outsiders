import React, { Component, Fragment } from 'react';

//Components
import {Meta} from '../../components/parts/index.js';

//Resources
// import './style.scss';

//Importing Images
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
  
const images = importAll(require.context('../../img/profiles/', false, /\.(jpg)$/));

const meta = {
	name: 'Tech Outsiders',
	description: 'It is our mission to solve that problem by highlighting all of the marvellous talent the Tech Industry has outside of the default.',
	slug: '',
};

const Speaker = ({details}) => {
	return (
        <h1>This is a speaker</h1>
    );
};

export default Speaker;