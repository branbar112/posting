import axios from 'axios';

const ROOT_URL = 'http://mhl-api.herokuapp.com/api/patients/';
const URL='http://mhl-api.herokuapp.com/api/questions/';

export const FETCH_QUESTION='FETCH_QUESTION';
export const POSTS="POSTS";





export function fetchQuestion(patient_id){

	 const request = axios.get(`${ROOT_URL}${patient_id}`);
	 console.log('request',request);
	return {
		type: FETCH_QUESTION,
		payload: request

	};

}
export function Posts(props){
	 const request = axios.post(`${URL}${patient_id}/answers`,props);
	 return {
	 	type: POSTS,
	 	payload:request

	 };


}

