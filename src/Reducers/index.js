import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from 'Reducers/User';
import sipso from 'Reducers/Sipso';

export default combineReducers({
  routing: routerReducer,
  user,
  sipso,
});
