import React, { Component } from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="movie_detail" element={<Detail />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;

// https://yts.mx/api
// https://yts.mx/api/v2/list_movies.json