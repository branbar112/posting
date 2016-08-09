import { FETCH_QUESTION, PostsC } from '../actions/index';

export default function(state=[],action){
	//console.log('action recieved',action);
	switch (action.type){

		case  FETCH_QUESTION:
			return [action.payload.data] ;
	}
	return state;

}
