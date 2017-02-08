import { combineReducers } from 'redux';
import Navigation from './navigation_reducer';
import currentPosition  from './current_position';



const rootReducer = combineReducers({
	navigation: Navigation,
	currentPosition: currentPosition
});

export default rootReducer;