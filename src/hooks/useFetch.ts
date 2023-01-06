import { useContext, useEffect, useState } from "react";
import CityForecast from "../interfaces/CityForecast";
import { CityContext } from "../App";
import { cityDataOrganizer } from "../utils/helpers";
import { useParams } from "react-router";

const getCoordinatesFromParams = async (cityName, geoCodingUrl, appiKey) => {
  const response = await fetch(geoCodingUrl + `q=${cityName}&appid=${appiKey}`);

  const geoCodingResponse = await response.json();
  const { lat: latitude, lon: longitude } = geoCodingResponse[0];

  return { latitude, longitude };
};

const getCoordinatesFromUserLocation = async () => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
};

const fetchAndSetCity = async (
  url,
  cityCoordinates,
  setCity,
  setLoading,
  appiKey
) => {
  const cityResponse = await fetch(
    url +
      `lat=${cityCoordinates.latitude}&lon=${cityCoordinates.longitude}&appid=${appiKey}`
  );
  const rawCityResponse = await cityResponse.json();

  const cityData: CityForecast = cityDataOrganizer(rawCityResponse);

  setCity(cityData);
  setLoading(true);
};

const useFetchNoCredentials = (
  url: string,
  geoCodingUrl: string,
  appiKey: string
) => {
  const { setCity } = useContext(CityContext);
  const [error, setError] = useState(null as Error | null);
  const [loading, setLoading] = useState(true);
  const { city: cityNameParams } = useParams();

  useEffect(() => {
    (async () => {
      try {
        let cityCoordinates = { latitude: 0, longitude: 0 };
        if (cityNameParams) {
          cityCoordinates = await getCoordinatesFromParams(
            cityNameParams,
            geoCodingUrl,
            appiKey
          );
        } else {
          const {
            coords: { latitude, longitude },
          } = (await getCoordinatesFromUserLocation()) as any;
          cityCoordinates = { latitude, longitude };
        }
        await fetchAndSetCity(
          url,
          cityCoordinates,
          setCity,
          setLoading,
          appiKey
        );
      } catch (error) {
        console.log(error);
        setError(error as any);
      } finally {
        setLoading(false);
      }
    })();
  }, [geoCodingUrl, appiKey, url]);

  return { error, loading };
};
const useFetch = () =>
  useFetchNoCredentials(
    process.env.REACT_APP_URL as string,
    process.env.REACT_APP_GEOCODING_URL as string,
    process.env.REACT_APP_API_KEY as string
  );

export default useFetch;
