import React from "react";
import Header from "./Header";

function App(){
  return (
    <div>
      <Header/>
      <h3>{new Date().toLocaleTimeString()}</h3>
      <h3>3a</h3>
      <h3>Thato and Haley</h3>
      <p><em>Firebase entries not saving!</em></p>
      <hr/>
    </div>
  );
}

export default App;
