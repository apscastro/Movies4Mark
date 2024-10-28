import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Movies from './pages/Movies';

function App() {
  return (
    <Routes>
      <Route path="" element={<Movies/>}></Route>
    </Routes>
  );
}

export default App;
