import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from 'redux/reducers';

import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(
  rootReducer,
  compose(composeWithDevTools(applyMiddleware(thunk)))
);
