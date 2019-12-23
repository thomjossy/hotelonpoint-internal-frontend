import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import blogReducer from "./reducers/blogReducers";
import uiReducers from "./reducers/uiReducers";
import userReducer from "./reducers/userReducer";

const initialState = {};

const middleware = [thunk];

const reducer = combineReducers({
  user: userReducer,
  UI: uiReducers,
  blog: blogReducer
});

const composeEnhancer =
  typeof window == "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancer(applyMiddleware(...middleware));

const store = createStore(reducer, initialState, enhancer);

export default store;
