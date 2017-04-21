import React from 'react';
import axios from 'axios';

import Header from './Header';

import ContestPreview from './ContestPreview';

import data from '../testData';

class App extends React.Component{
	constructor(props){ //adding props as an argument works
		super(props);
		console.log(this.props)
		//console.log(this.props.initialContests)//broken here
		this.state = {
			pageHeader: "Naming Contests",
			contests:this.props.initialContests// contests as this.props.initialContests comes back undefined not empty array
		}
	}
		
	componentDidMount(){
		//ajax ...
		console.log(this.props)
		console.log(this.props.initialContests)//works here
		axios.get('/api/contests')
			.then(resp => {

				this.setState({
					contests: resp.data.contests
				})
				//console.log(resp.data.contests);
			})
			.catch(console.error)

		
	}

	componentWillUnmount(){

	}


	render(){
		return(
			<div className="App">
				<Header message={this.state.pageHeader}/>
				<div>
					{this.state.contests.map(contest =>
					<ContestPreview key={contest.id} {...contest} />
					)}
				</div>
			</div>
		);
	}
}

export default App;