export const CHANGE_POSITION = 'CHANGE_POSITION';

export function switchPosition (position){
	console.log(position)
	return {
		type: CHANGE_POSITION,
		payload: position
	}
}