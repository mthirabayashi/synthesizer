import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';


const configureStore = (preLoadedState) => (
  createStore(rootReducer, preLoadedState)
);

export default configureStore;
