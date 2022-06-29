import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from './components/Feed';
import Login from './pages/Login';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </>
  );
}

export default App;
