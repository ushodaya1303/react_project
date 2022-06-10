import React from "react";
import './App.css';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";

function App() {

  return (
      <>
          <Routes>
              <Route path = '/' element = {<Login/>}/>
          </Routes>
      </>
  );
}

export default App;
