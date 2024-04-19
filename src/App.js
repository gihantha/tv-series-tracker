import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


import "./App.css";

import AddShow from './Pages/AddShow/AddShow';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add-a-show' element={<AddShow/>} />

      </Routes>
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
