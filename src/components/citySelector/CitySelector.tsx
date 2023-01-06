import { useContext, useState } from "react";
import { Combobox } from "@headlessui/react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { CityContext } from "../../App";
import { useNavigate } from "react-router-dom";
const cities = [
  "Xativa",
  "London",
  "Valencia",
  "Rome",
  "Los Angeles",
  "Chicago",
  "Toronto",
  "Sydney",
  "Singapore",
  "Dubai",
  "San Francisco",
  "Barcelona",
  "Hong Kong",
  "Amsterdam",
  "Bangkok",
  "Istanbul",
  "Munich",
  "Vienna",
  "Mexico City",
  "Tokyo",
  "Beijing",
  "Shanghai",
  "São Paulo",
  "Mumbai",
  "Moscow",
  "Seoul",
  "Berlin",
  "Madrid",
  "Rio de Janeiro",
  "New Delhi",
  "Lisbon",
  "Melbourne",
  "Jakarta",
];

const CitySelector = () => {
  const { city } = useContext(CityContext);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const filteredCities =
    query === ""
      ? cities
      : cities.filter((currentCity) => {
          return currentCity.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="w-full ">
      <Combobox
        value={city.name}
        onChange={(currentCity) => {
          navigate(`/details/${currentCity}`);
        }}
      >
        <div className="relative w-full  text-center h-10 rounded-md">
          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            className="-translate-y- h-8 pl-3 rounded-b bg-accent/70 text-white w-[14rem] font-semibold"
          />
          <BsFillCaretDownFill className="absolute right-[calc(50%-100px)] top-[8px] text-white" />
          <Combobox.Options className="absolute justify-center w-full shadow z-10 mt-3 bg-white ">
            {filteredCities.map((currentCity, index) => (
              <Combobox.Option
                value={currentCity}
                key={currentCity}
                className={`py-2 ${
                  index % 2 === 0 ? "bg-accent/60 text-white" : ""
                }
                `}
              >
                {currentCity}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  );
};

export default CitySelector;
