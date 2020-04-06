import React  from 'react';
import { connect } from 'react-redux';

class HomePage extends React.Component{

	render(){
		return(
			<h2>Home Page</h2>
		);
	}
}

function mapState(state){
	return {};
}

const actionCreators = {

}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage};