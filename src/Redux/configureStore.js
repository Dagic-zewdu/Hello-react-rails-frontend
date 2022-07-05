import { applyMiddleware, configureStore } from 'redux';
import thunk from 'redux-thunk';
import MessagesReducer from './reducer/message';

export default configureStore(MessagesReducer, applyMiddleware(thunk));
