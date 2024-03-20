export type WeatherPlaceType = {
  name: string;
  main: {
    temp: string;
  };
  weather: WeatherStateType[];
};

export type WeatherStateType = {
  main: string;
  icon: string;
  description: string;
};

// export type WeatherType = {
// };
