import MessageActionTypes from '../type/message';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
};

const MessagesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case MessageActionTypes.FETCH_MESSAGE_START:
      return {
        ...state,
        loading: true,
      };
    case MessageActionTypes.FETCH_MESSAGE_SUCCESS:
      return {
        ...state,
        data: payload,
        error: false,
      };
    case MessageActionTypes.FETCH_MESSAGE_ERROR:
      return {
        ...state,
        error: payload,
      };
    default: return state;
  }
};

export default MessagesReducer;
