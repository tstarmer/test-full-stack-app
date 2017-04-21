import React from 'react';
import ReactDomServer from 'react-dom/server';

import App from './src/components/App'


import config from './config';

import axios from 'axios';

const getApiUrl = contestId =>{
	if(contestId){
		
		return `${config.serverUrl}/api/contests/${contestId}`
	}

	return`${config.serverUrl}/api/contests`
}


const getInitialData = (contestId, apiData) =>{
	if(contestId){
		return{
			currentContestID:apiData.id,
			contests: {
				[apiData.id]: apiData
			}
		}
	}

	return {
		contests: apiData.contests
	}
};

const serverRender = (contestId)=> 
	// console.log("contestId", contestId)

	axios.get(getApiUrl(contestId))
	.then(resp =>{
		const initialData = getInitialData(contestId, resp.data)
		// console.log(initialData)
		return ReactDomServer.renderToString(
			<App initialData={initialData}/>
		);
		
	})
	.catch(console.error)

	

export default serverRender;