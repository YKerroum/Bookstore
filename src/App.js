import React from 'react';
import './App.css';

const App = () =>(
    <>


    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </>
  );

export default App;
