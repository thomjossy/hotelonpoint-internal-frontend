import { LOADING_BLOG, SET_BLOG } from '../type';

const initialState = {
    message: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case SET_BLOG:
            return {
                loading: false,
                ...action.payload
            };
        case LOADING_BLOG:
            return {
                ...state,
                loading: true
            }
        
        default:
            return state;
    }
}