'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import store from './store';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(store.lists.map(item => (<List key={item.id} header={item.header} cards={item.cardIds.map(item => store.allCards[item])}/>)), div);
	ReactDOM.unmountComponentAtNode(div);
});
