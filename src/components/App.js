import React from 'react';

import Header from './Header';

import ContestList from './ContestList';
import Contest from './Contest'

import * as api from '../api'

const pushState = (obj, url) =>{
	window.history.pushState(obj,'', url);
}


import data from '../testData';

class App extends React.Component{
	constructor(props){ //adding props as an argument works
		super(props);
		// console.log(this.props)
		//console.log(this.props.initialContests)//broken here
		this.state = this.props.initialData
		
	}
		
	componentDidMount(){
		//ajax ...
		// console.log(this.props)
		// console.log(this.props.initialContests)//works here
		

		
	}

	componentWillUnmount(){

	}


	fetchContest = (contestID) =>{
		pushState(
			{ currentContestID: contestID}, 
			`/contest/${contestID}`
			);
		api.fetchContest(contestID).then(contest =>{
			this.setState({
			
			currentContestID: contest.id,
			contests: {
				...this.state.contests,
				[contest.id]:contest
			}
		})
	})
		
		


	}

	currentContest(){
		return this.state.contests[this.state.currentContestID]
	}

	pageHeader(){
		if(this.state.currentContestID){
			return this.currentContest().contestName
		}
		return 'Naming Contest'
	}

	currentContent(){
		if(this.state.currentContestID){
			return <Contest {...this.currentContest()}/>;
		}
		return <ContestList 
				onContestClick = {this.fetchContest}
				contests={this.state.contests}/>
		
	}

	render(){
		return(
			<div className="App">
				<Header message={this.pageHeader()}/>
				{this.currentContent()}
				

			</div>
		);
	}
}

export default App;