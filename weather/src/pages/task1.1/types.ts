export type WeatherPlaceType  = {
  name: string;
  main: {
    temp: number;
  };
  weather: WeatherStateType[];
} | null

export type WeatherStateType = {
  main: string;
  icon: string;
  description: string;
};


