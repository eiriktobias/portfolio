import { useState } from "react";
import Main from "./components/Main";
import Sidenav from "./components/sidenav";


function App() {
  return (
    <div>
      <Sidenav />
      <Main />
    </div>
  );
}

export default App;
