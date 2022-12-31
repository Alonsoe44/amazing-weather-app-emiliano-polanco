import { Route, Routes } from "react-router";
import City from "./pages/City";
import Home from "./pages/Home";
import { createContext, useState } from "react";

const defaultCity = {
  name: "Vancouver",
  id: 6173331,
};

export const CityContext = createContext({
  city: defaultCity,
  setCity: (city: any) => {},
});

function App() {
  const [city, setCity] = useState(defaultCity);
  return (
    <CityContext.Provider value={{ city, setCity }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:city" element={<City />} />
        </Routes>
      </div>
    </CityContext.Provider>
  );
}

export default App;
