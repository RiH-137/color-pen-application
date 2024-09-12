import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './container';


const App = () => {
  return (
    <div className='w-screen h-screen flex items-start justify-start overflow-hidden'>
      {/* Define the Routes inside a Router */}
      <Routes>
        <Route path='/home/*' element={<Home />} />


        {/* Redirect to /home if any unknown route is entered */}
        <Route path='*' element={<Navigate to={'/home'} />} />
      </Routes>
    </div>
  );
};

export default App;
