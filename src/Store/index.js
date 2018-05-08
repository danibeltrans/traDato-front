import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { createTracker } from 'redux-segment';
import rootReducer from 'Reducers';

const tracker = createTracker();

export const history = createHistory();

const initialState = {};
const middleware = [
  thunk,
  routerMiddleware(history),
  tracker,
];
let composeEnhancers = compose;
if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}
const composed = composeEnhancers(
  applyMiddleware(...middleware),
);

export default createStore(
  rootReducer,
  initialState,
  composed,
);
