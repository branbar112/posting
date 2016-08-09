import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchQuestion } from '../actions/index';


 class SearchBar extends Component {
constructor(props){
	super(props);
	this.state={term: ''};
	this.onInputChange=this.onInputChange.bind(this);
	this.onFormSubmit=this.onFormSubmit.bind(this);
}
onInputChange(event){

	//console.log(event.target.value);
	this.setState({term: event.target.value});
}
onFormSubmit(event){
	event.preventDefault();

	this.props.fetchQuestion(this.state.term);
	this.setState({term: ''});

}

render(){
	return (
		<form onSubmit={this.onFormSubmit} className="input-group">
			<input 
				placeholder="Enter your patient id #"
				value={this.state.term}
				onChange={this.onInputChange}
			/>
			
				<button type="submit" className="btn btn-info">Enter</button>
			
		</form>
		);
}

}
function mapDispatchToProps(dispatch){
return bindActionCreators({fetchQuestion},dispatch);

}

export default connect(null,mapDispatchToProps)(SearchBar);