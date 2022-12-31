import React from "react";
import { useParams } from "react-router";

const City = () => {
  const { city } = useParams();
  return <div>{city}</div>;
};

export default City;
