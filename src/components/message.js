/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessageAsync } from '../Redux/action/message';

function Message() {
  const dispatch = useDispatch();
  const { message, loading, error } = useSelector((state) => state);
  useEffect(() => dispatch(fetchMessageAsync()), []);

  return (
    loading
      ? (
        <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '90vh' }}>
          <Spinner />
        </div>
      )
      : error
        ? (
          <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '90vh' }}>
            <h1 className="text-danger">{error?.message}</h1>
          </div>
        )
        : (
          <div className="container d-flex align-items-center justify-content-center flex-column" style={{ minHeight: '90vh' }}>
            <h1 className="display-3">{message?.content}</h1>
            <Button className="mt-4" onClick={() => dispatch(fetchMessageAsync())}>
              Refresh
            </Button>
          </div>
        )
  );
}

export default Message;
