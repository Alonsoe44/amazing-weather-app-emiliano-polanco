import { useContext, useEffect, useState } from "react";
import CityForecast from "../interfaces/CityForecast";
import { CityContext } from "../App";
import { cityDataOrganizer } from "../utils/helpers";

const useFetch = (
  url: string,
  geoCodingUrl: string,
  cityName: string,
  appiKey: string
) => {
  const { setCity } = useContext(CityContext);
  const [error, setError] = useState(null as Error | null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          geoCodingUrl + `q=${cityName}&appid=${appiKey}`
        );

        const geoCodingResponse = await response.json();
        const { lat: latitude, lon: longitude } = geoCodingResponse[0];

        const cityResponse = await fetch(
          url + `lat=${latitude}&lon=${longitude}&appid=${appiKey}`
        );
        const rawCityResponse = await cityResponse.json();

        const cityData: CityForecast = cityDataOrganizer(rawCityResponse);
        setCity(cityData);
        setLoading(true);
      } catch (error) {
        console.log(error);
        setError(error as any);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [geoCodingUrl, appiKey]);

  return { error, loading };
};

export default useFetch;
