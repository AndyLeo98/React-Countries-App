import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Error from "./components/Error";
import SingleCountry from "./components/SingleCountry";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Countries />}></Route>
          <Route path="/:name" element={<SingleCountry />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
