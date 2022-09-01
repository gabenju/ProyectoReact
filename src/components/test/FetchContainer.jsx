import React, { useState, useEffect } from 'react';
import FetchLayout from './FetchLayout';

export default function FetchContainer() {
  const [actividad, setActividad] = useState({});
  useEffect(() => {
    console.log(actividad)
    fetch('https://swapi.dev/api/people/')
      .then((res) => res.json())
      .then((json) => {
        setActividad(json.results);
      })
      .catch((e) => console.log(e))
      .finally(() => console.log('lo ultimo que hago'));
  }, []);
  return (
  <FetchLayout actividad={actividad} />);
}