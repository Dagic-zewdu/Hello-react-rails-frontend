import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Message from './components/message';

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Message />} />
      <Route exact path="/message" element={<Message />} />
    </Routes>
  );
}

export default Router;
