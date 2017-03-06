import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';
import rootReducer from './combineReducers';

const loggerMiddleware = createLogger({
  stateTransformer: state => state && state.toJS()
});

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      loggerMiddleware,
      thunkMiddleWare
    )
  );

  return store;
}
