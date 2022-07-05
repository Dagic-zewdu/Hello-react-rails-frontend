import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import MessagesReducer from './reducer/message';

const store = createStore(MessagesReducer, applyMiddleware(thunk));
export default store;
