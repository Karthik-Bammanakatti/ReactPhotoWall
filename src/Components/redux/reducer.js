import posts from "../Data/posts";
import { combineReducers } from "redux";

function comments(state = {}, action) {
	switch (action.type) {
		case "ADD_COMMENT":
			if (!state[action.postId]) {
				return { ...state, [action.postId]: [action.comment] };
			} else {
				return {
					...state,
					[action.postId]: [...state[action.postId], action.comment],
				};
			}
		case "LOAD_COMMENTS":
			return action.comments;
		default:
			return state;
	}
}
function postsRed(state = posts, action) {
	switch (action.type) {
		case "REMOVE_POST":
			return [
				...state.slice(0, action.index),
				...state.slice(action.index + 1),
			];
		case "ADD_POST":
			return [action.post, ...state];
		case "LOAD_POSTS":
			return action.posts;
		default:
			return state;
	}
}

const rootReducer = combineReducers({ postsRed, comments });
export default rootReducer;
