import axios from 'axios';
import React, { useEffect, useState } from 'react';
import type { WeatherType, WeatherPlaceType, WeatherStateType } from './types';
import './weatherStyle.css';

const api = {
  key: 'ee97be74b2183e9fe4639ae58a77aa4e',
  base: 'https://api.openweathermap.org/data/2.5/weather?',
};

export default function WeatherPage(): JSX.Element {
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState<WeatherPlaceType | null>(null);

  const searchPressed = (): void => {
    axios<WeatherPlaceType>(`${api.base}q=${search}&appid=${api.key}`)
      .then(({ data }) => {
        setWeather(data);
        setSearch('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    searchPressed();
  }, []);

  return (
    <div className="wrap">
      <div className="wrapper">
        <div className="input_div">
          <input
          value={search}
            className="inp"
            type="text"
            placeholder="Введите город"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn" type="button" onClick={searchPressed}>
            поиск
          </button>
        </div>
        {weather ? (
          <div>
            <p className="town_name">{weather?.name}</p>
            <div className="t_flex">
              <p className="temp">{Math.round(weather?.main.temp - 273.15)}°C</p>
              <img
              
                className="icon"
                src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                alt="cloud"
              />
            </div>
          </div>
        ) : (
          <h2 className="alarm">введите название города ☝️</h2>
        )}
      </div>
    </div>
  );
}
