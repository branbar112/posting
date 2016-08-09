import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {Post} from '../actions/index';


class Staff extends Component{
	
		//console.log(answers);
onSubmit(props){
	this.props.Post(props);

}

	render(){
		
		const {fields: {answers},handleSubmit} =this.props;

		 
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<div >
					<input 
						className="form-control"
						{...answers}
						placeholder="Enter your answer" />
					</div>
					
					 </form>
					
		);
	}

};
export default reduxForm({
	form: 'Answers',
	fields:['answers']
},null,{Post})(Staff);