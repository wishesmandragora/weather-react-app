
export interface WeatherType {
  name: string;
  country: string;
  temperature: number;
  description: string;
  minTemp: number;
  maxTemp: number;
  // coord: {
  //   lon: number;
  //   lat: number;
  // };
  // weather: {
  //   id: number;
  //   main: string;
  //   description: string;
  //   icon: string;
  // }[];
  // base: string;
  // main: {
  //   temp: number;
  //   feels_like: number;
  //   temp_min: number;
  //   temp_max: number;
  //   pressure: number;
  //   humidity: number;
  // };
  // visibility: number;
  // wind: {
  //   speed: number;
  //   deg: number;
  // };
  // clouds: {
  //   all: number;
  // };
  // dt: number;
  // sys: {
  //   type: number;
  //   id: number;
  //   message: number;
  //   country: string;
  //   sunrise: number;
  //   sunset: number;
  // };
  // id: number;
  // name: string;
  // cod: number;
}
