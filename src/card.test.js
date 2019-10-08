'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Card from './card';
import store from './store';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Card key='' header='' desc='' />, div);
	ReactDOM.unmountComponentAtNode(div);
});
