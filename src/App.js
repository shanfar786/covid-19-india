import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Head from "./components/head";
import './App.css';
import Home from "./pages/Home";
import Covid from "./pages/covid";


function App() {
  return (
    <div className="App">
     <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/covid-details/:stateId" element={<Covid />} />
      </Routes>
    </div>
  );
}
  
export default App;