import React from "react";
import "./App.css";
import AddHotelsPage from "./components/pages/AddHotelsPage";
import "./components/scss/main.scss";
import AddRoomPage from "./components/pages/AddRoomPage";

function App() {
  return (
    <div className="App">
      <AddHotelsPage />
      {/* <AddRoomPage /> */}
    </div>
  );
}

export default App;
