import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessageAsync } from '../Redux/action/message';

function Message() {
  const dispatch = useDispatch();
  const { message, loading, error } = useSelector((state) => state);
  useEffect(() => dispatch(fetchMessageAsync()), []);
  console.log(message);
  return (
    <div>Message</div>
  );
}

export default Message;
