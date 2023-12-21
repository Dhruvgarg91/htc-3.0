import React from "react";
import NAVBAR from "./components/navbar/App";
import HomePage from "./components/Main-page/HomePage";
function App() {
  return (
    <div className="mainPage">
      <div><NAVBAR /></div>
      <HomePage />
    </div>
  )
}
export default App;
