import { combineReducers } from 'redux';
import QuestionReducer from './reducer_question';
import {reducer as formReducer} from 'redux-form';


const rootReducer = combineReducers({
  question: QuestionReducer,
  form: formReducer
});

export default rootReducer;
