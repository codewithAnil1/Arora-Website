import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Page/HomePage";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
