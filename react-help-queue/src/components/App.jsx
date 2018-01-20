import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";

function App(){
  return (
    <div>
      <Header/>
      <h3>{new Date().toLocaleTimeString()}</h3>
      <TicketList/>
      <hr/>
    </div>
  );
}

export default App;
