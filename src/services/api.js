import axios from "axios";

const API_KEY = "1af630f22e3bbb828c18e93b2e7e059c";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
// const API_URL2='api.openweathermap.org/data/2.5/forecast';

export const getWeather = async (city) => {
  try {
    let response = await axios.get(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    // console.log("Error while calling the api", error.message);
    return error.message;
  }
};

export const getWeatherDays = async (city) => {
  // console.log(city);
  try {
    // let response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    // let response = await axios.get(`${API_URL2}?q=${city}&appid=${API_KEY}`)
    // let response=await axios.get(`${API_URL2}?lat=${city.lat}&lon=${city.lon}&appid={API key}`)
    let response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=24485baa2feb4d7dd186da07b331561f`
    );
    return response.data;
  } catch (error) {
    // console.log("Error while calling the api", error.message);
    return error.message;
  }
};

export const getAirPollution = async (city) => {
  // console.log(city);
  try {
    const config = {
      headers: { "X-Api-Key": "bQ9KDe55MLHJ+CKNeHrhpg==r8DlWzYCmRRjxn5m" },
    };
    let response = await axios.get(
      `https://api.api-ninjas.com/v1/airquality?city=${city}`,
      config
    );
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error while calling the api", error.message);
    return error.message;
  }
};
