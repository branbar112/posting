import React, { Component } from 'react';
import { connect } from 'react-redux';
import Staff from '../components/staff';
import {reduxForm} from 'redux-form';
import {Post} from '../actions/index';





 class Questionlist extends Component{

	renderQuestion(data){
		

		      

	const questionList = data.questions.map((ques) => {
      return (
        <li key={ques.id}>{ques.title}   

        <Staff />
        	
			
       </li>
      )
    })
		return questionList;
	}


	renderName(data){
		return(<h5><p>Hello {data.f_name}  {data.l_name} Please answer the questions below...</p></h5>);
	}
	answer(data){
		return(
		<p>Your last response on a scale of one to ten for question 1 is: {data.questions[1].answers.slice(-1)[0].value}</p>
		);
	}
	
	render(){

		return (

			<div >
				<h3>Your daily questions</h3>

					{this.props.question.map(this.renderName)}
				<ul className="col-md-6 list-group" type="1">
					{this.props.question.map(this.renderQuestion)}

					
						
					
				</ul>
				<ul className="col-md-8 list-group">

					{this.props.question.map(this.answer)}
					

				</ul>
				<button type="submit" className="btn btn-success" >Submit your answers</button>	
			</div>
			
			);
	}

}

function mapStateToprops(state){ // use the name givein in reducer index.
	return { question:state.question}

}
export default connect(mapStateToprops)(Questionlist);