import FileReducer from './File/fileReducer';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  FileReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
