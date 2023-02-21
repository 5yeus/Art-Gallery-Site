import React from "react";
import Homepage from './component/Homepage/Homepage'
import Location from './component/Location/Location'
import {Routes,Route} from "react-router-dom"

function App() {
  return (

    <Routes>
      
      <Route path="/" element={<Homepage />}/>
      <Route path="/Location" element={<Location/>} />
    </Routes>
  );
}

export default App;
