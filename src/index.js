import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


import App from './components/App';


var contests = 


axios.get('/api/contests')
	.then(resp => {
		ReactDOM.render(
			<App initialData={resp.data}/>,
			document.getElementById('root')
		);
	
	})
	.catch(console.error)
