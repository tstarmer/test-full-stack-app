import React from 'react';
import ReactDomServer from 'react-dom/server';

import App from './src/components/App'


import config from './config';

import axios from 'axios';

const serverRender = ()=> 
	axios.get(`${config.serverUrl}/api/contests`)
	.then(resp =>{
		return ReactDomServer.renderToString(
			<App initialContests={resp.data.contests}/>
		);
		// console.log(resp.data)
	})
	.catch(console.error)

	

export default serverRender;