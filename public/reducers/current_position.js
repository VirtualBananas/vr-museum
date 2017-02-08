import { CHANGE_POSITION } from '../actions/index';


export default function (state = {position:[0, 0, 10], camera: "userHeight: 1.8"}, action){

	switch (action.type){
		case CHANGE_POSITION:
	console.log("what is payload", action.payload)
			return action.payload;
	}
	return state;
}