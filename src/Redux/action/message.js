import baseUrl from '../../api/basUrl';
import MessageActionTypes from '../type/message';

export const fetchMessageStart = () => ({
  type: MessageActionTypes.FETCH_MESSAGE_START,
});

export const fetchMessageSuccess = (payload) => ({
  type: MessageActionTypes.FETCH_MESSAGE_SUCCESS,
  payload,
});

export const fetchMessageError = (payload) => ({
  type: MessageActionTypes.FETCH_MESSAGE_ERROR,
  payload,
});

export const fetchMessageAsync = () => async (dispatch) => {
  try {
    dispatch(fetchMessageStart());
    const res = await baseUrl.get('/messages');
    dispatch(fetchMessageSuccess(res.data));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    dispatch(fetchMessageError(err));
  }
};
