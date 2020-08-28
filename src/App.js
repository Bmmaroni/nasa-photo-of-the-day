import React from "react";
import "./App.css";
import PhotoGrid from "./components/PhotoGrid";
import { Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <h1>Astronomy Photo of the Day</h1>
      <PhotoGrid />
    </div>
  );
}

export default App;
