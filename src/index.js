import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import YTSearch from 'youtube-api-search';

import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware()(createStore);
import SearchBar from './components/search_bar'


const App = () => {
    return (
    	<div>
    		<SearchBar />
    	</div>
    );
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
