import { useContext } from "react";
import { Listbox } from "@headlessui/react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { CityContext } from "../../App";

const cities = [
  { name: "Lima", id: 1 },
  { name: "Bogota", id: 2 },
  { name: "Santiago", id: 3 },
  { name: "Buenos Aires", id: 4 },
];
const CitySelector = () => {
  const { city, setCity } = useContext(CityContext);

  return (
    <Listbox value={city} onChange={setCity}>
      <BsFillCaretDownFill className="absolute right-[calc(50%-80px)] top-[13px] text-secondaryText" />
      <div className="relative w-full bg-accent/20 text-center h-10 rounded-md">
        <Listbox.Button className="translate-y-2">{city.name}</Listbox.Button>
        <Listbox.Options className="absolute justify-center w-full bg-white shadow z-10 mt-3 ">
          {cities.map((currentCity) => (
            <Listbox.Option
              value={currentCity}
              key={currentCity.id}
              className="my-2
                "
            >
              {currentCity.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default CitySelector;
