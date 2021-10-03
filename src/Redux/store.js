import FileReducer from './File/fileReducer';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  fileState: FileReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
