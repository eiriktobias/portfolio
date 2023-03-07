import { useState } from "react";
import Main from "./components/Main";
import Sidenav from "./components/sidenav";
import Work from "./components/Work";


function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
    </div>
  );
}

export default App;
