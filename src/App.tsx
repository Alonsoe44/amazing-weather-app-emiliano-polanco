import { Route, Routes } from "react-router";
import City from "./pages/City";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:city" element={<City />} />
      </Routes>
    </div>
  );
}

export default App;
