import { CLEAR_ERRORS, CLEAR_MESSAGE, LOADING_UI, SET_ERRORS, SET_MESSAGE } from "../type";

const initialState = {
  loading: false,
  errors: null,
  message: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    case SET_MESSAGE:
      return {
        ...state,
        loading: false,
        message: action.payload
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        loading: false,
        message: null
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null
      };
    case LOADING_UI:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
